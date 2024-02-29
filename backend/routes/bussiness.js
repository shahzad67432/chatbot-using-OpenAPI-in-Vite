const express = require('express')
const apiResponse = require('../botModel');
const router = express.Router();

router.post('/business', async (req, res)=>{
    const {inPut} = req.body;
    const messageContent = await apiResponse("be a good business analyst to guide me related to my queries\n" + inPut)
    res.json([{messageContent}])
})

module.exports = router