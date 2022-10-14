var FirstCollection = require("../models/schema");

var bcrypt = require("bcryptjs");

class class1 {

    static a = async (req, res) => {
        res.render("signup")
    }

    static b = async (req, res) => {
        
        try{
            
            var addingMensRecords = new FirstCollection(
                {
                    username: req.body.username,
                    password: await bcrypt.hash(req.body.password, 12)
    
                });
    
            await addingMensRecords.save();
    
            res.json({ "message": "data uploaded" });

        }catch(err){
            console.log(err);
        }

    }

    static find = async (req, res) => {

        var a = await FirstCollection.find();

        res.json({ a });

    }

    static delete = async (req, res) => {

        var a = await FirstCollection.find().deleteMany();

        res.json({ "message": "data deleted" });

    }

    static update = async (req, res) => {

        var a = await FirstCollection.findOne();
        console.log(a);

        res.json({ "message": "data updated" });

    }

}

module.exports = {class1};