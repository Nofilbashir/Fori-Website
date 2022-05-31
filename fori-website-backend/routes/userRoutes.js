var express = require('express')
var router = express.Router()

const controller = require("../controller/user")

router.post("/manualsignup", controller.signup_api_controller);

router.post("/login", controller.login_api_controller);

router.post("/calculation",controller.calculation_api_controller)

module.exports = router  