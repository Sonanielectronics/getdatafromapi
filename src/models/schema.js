var mongoose = require("mongoose");
var validator = require("validator")

var firstSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true]
    },
    password: {
        type: String,
        required: true
    }
});

var FirstCollection = mongoose.model("vivekcollection", firstSchema);
module.exports = FirstCollection;