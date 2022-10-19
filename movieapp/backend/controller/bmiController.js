const {Router} = require('express');
const BmiModel = require('../model/Bmi.Model');

const bmiController = Router();

bmiController.post('/getbmi',async (req,res) => {
    const {weight,height,userId} = req.body;
    console.log(req.body)
    let ht = (Number(height)/100)*(Number(height)/100)
    const bmivalue = (Number(weight)/ ht) ;
    // console.log(bmivalue)
    const new_value = new BmiModel({bmivalue,userId})
    await new_value.save();
    res.send({bmivalue:bmivalue})

})

bmiController.get('/history',async (req,res)=>{
    const {userId} = req.body;
    const history = await BmiModel.find({userId});
    res.send(history);
})

module.exports = bmiController;