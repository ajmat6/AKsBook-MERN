const express = require('express');
const router = express.Router(); //similar like express() but this is used when we make an specilized .js file for routing so as to make our main .js file less complex

router.get('/', (req,res) => {
    res.json([]); //sends json response
})

module.exports = router;