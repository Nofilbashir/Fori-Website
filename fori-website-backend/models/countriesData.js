// const { number } = require("joi");
const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    name: { type: String },
    diesel: { type: Number },
    petrol: { type: Number },
    hybrid: { type: Number } 
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;