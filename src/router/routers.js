var express = require("express");
const router = express.Router();
var {class1} = require('../controller/controller');

router.get('/', (req, res) => {
    res.send(process.env.SECRET_KEY);
})

router.get('/signup', class1.a);
router.post('/signup', class1.b);

router.get('/find', class1.find);
router.get('/delete', class1.delete);
router.get('/update', class1.update);

module.exports = router;