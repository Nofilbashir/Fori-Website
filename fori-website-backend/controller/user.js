const User = require("../models/User")
const wrapper = require("../wrappers/user")
const Country = require("../models/countriesData")
const wrapperC = require("../wrappers/country")
const joi = require("joi")

let login_api_controller = async (req, res) => {

    let joi_schema = joi.object({
        email: joi.string().required(),
        password: joi.string().required()
    })

    const { error, value } = joi_schema.validate(req.body)

    if (error) {
        return res.json({ status: "R_failure", message: error.message, data: {} })
    }

    try {

        let { email, password } = req.body;
        let user = await wrapper.findUserByEmail(email)

        if (user.password !== password)
            return res.json({ status: "P_failure", message: "Password does not match", data: {} });

        return res.json({ status: "success", message: "Successfully logged in ", data: user });

    } catch (err) {
        return res.json({ status: "E_failure", message: err, data: {} })
    }
}

let signup_api_controller = async (req, res) => {

    let joi_schema = joi.object({
        Userinfo: joi.object({
            name: joi.string().required(),
            email: joi.string().required(),
            password: joi.string().required()
        }).required()
    })

    const { error, value } = joi_schema.validate(req.body)

    if (error) {
        return res.json({ status: "R_failure", message: error.message, data: {} })
    }

    const { name, email, password } = req.body.Userinfo;
    try {
        let user = await wrapper.findUserByEmail(email)

        return res.json({
            message: `${email} already registered and was signned up  through mannual signup plz go to login page`,
            useradd: false,
            name: user.name,
            already_present:true,
        });

    } catch (err) {

        let user = await wrapper.addUser({ name, email, password })
        res.json({
            message: `${user.name} congrats your are signned up  through mannual signup plz go to login page`,
            useradd: true,
            name: user.name,
        });
    }
   
}
let calculation_api_controller = async (req, res) => {
    console.log(req.body)
    let joi_schema = joi.object({
        UserInput: joi.object({
            name: joi.string().required(),
            KmsShared: joi.number().integer().required(),
        }).required()
    })

    const { error, value } = joi_schema.validate(req.body)

    if (error) {
        return res.json({ status: "R_failure", message: error.message, data: {} })
    }

    const { name, KmsShared } = req.body.UserInput;
    try {
        let country = await wrapperC.findCountryByName(name)
        // .....................carbon emission saved per day/km............................................
        const EmissionSaved=(6.75 *((0.179)*(country.diesel) +(0.156)*(country.petrol) + (0.108)*(country.hybrid) ))/720;
        const userSavedEmission=EmissionSaved*KmsShared;
        const TressSaved = Math.round(userSavedEmission / 0.0575342)
        const FuelSavedperkm = (((675*(country.diesel/100))/14.8)+ ((675*(country.petrol/100))/14.7)+((675*(country.hybrid/100))/21.23))/720
        console.log(EmissionSaved,"carbon saved per day/km")
        return res.json({
            message: `${country} is a registered country,${EmissionSaved} per day-km ,${userSavedEmission} user saved carbon`,
            
            data:{
                p:country.petrol,
                d:country.diesel,
                h:country.hybrid,
                perDaySaving:userSavedEmission,
                TressSaved:TressSaved,
                FuelSavedperkm:FuelSavedperkm*KmsShared



            }
        });

    } catch (err) {
        console.log(err)
        res.json({
            message: `${name} is not a registered country`,
        });
    }
   
}

module.exports = {
    login_api_controller,
    signup_api_controller,
    calculation_api_controller
}