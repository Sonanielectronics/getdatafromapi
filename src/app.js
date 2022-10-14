var express = require("express");
var app = express();

require("./db/conn");
var FirstCollection = require("./models/schema");

require('dotenv').config();

var port = process.env.PORT || 3500;

var ejs = require("ejs");
var path = require("path");
var ejs_folder_path = path.join(__dirname, "../templates");
app.set("view engine", "ejs");
app.set("views", ejs_folder_path);

var bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./router/routers');
app.use('/', router);

app.listen(port , ()=>{
    console.log("Okay");
})

const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: "http://192.168.29.64:4000"
}))