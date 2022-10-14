var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vivek:vivekpassword@vivekcluster.lcrbeto.mongodb.net/vivekdb")
    .then(() => {
        console.log("conn okay");
    })
    .catch((e) => {
        console.log(e);
    })