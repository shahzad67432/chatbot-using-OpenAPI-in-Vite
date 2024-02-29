const express = require('express')
const apiResponse = require('../botModel');
const router = express.Router();

router.post('/education', async (req, res)=>{
    const {inPut} = req.body;
    const messageContent = await apiResponse("be a good tutor in education field to guide me in my queries\n" + inPut)
    res.json([{messageContent}])
})

module.exports = router