const express = require('express');
const cors = require('cors');

// configurando cors
const corsOptions = {
    origin :'*',
    optionsSuccessStatus : 200,
}


const router = express.Router();
router.use(express.json());


module.exports = router;