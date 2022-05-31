// Imports

const dotenv=require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/userRoutes")
const app = express();

const DB = process.env.DB_CONNECTION

mongoose
	.connect(DB)
	.then(() => {
		console.log("DB connected");
	})
	.catch((error) => {
		console.log("DB not connected", error);
	});

app.use(express.json());
// app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());

app.get("/", (req, res) => {
	res.send("port started welcome");
});

app.use("/api", router)

app.listen(process.env.PORT || 2000, function () {
	console.log("server is running");
});  

// mongodb+srv://waqar:<password>@cluster0.wlxyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority