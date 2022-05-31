const Country = require("../models/countriesData")

let findCountryByName = (name) => {
    return new Promise(async (resolve, reject) => {
        let country = await Country.findOne({ name: name })

        if (!country) reject("Country not found")

        resolve (country)
    })
}



module.exports = {
    findCountryByName
}