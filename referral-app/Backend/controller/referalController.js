const ReferalModel = require("../model/ReferalModel");

const { Router } = require("express");
const UserModel = require("../model/UserModel");

const referalController = Router();

referalController.post("/check", async (req, res) => {
  console.log(req.body)
  const { referalcode } = req.body;

  const check = await ReferalModel.findOne({ referalcode });

  console.log(check);
  if (check) {
    return res.send({ message: "It is valid referralcode", status: true });
  } else {
    return res.send({ message: "It is not valid referralcode", status: false });
  }

});

referalController.post("/create", async (req, res) => {
  const { userId, naam } = req.body;
  const len = await UserModel.find();

  const referalcode = `${naam.toLowerCase()}15${len.length}`;

  const new_user_code = new ReferalModel({ referalcode, point: 0, userId });
  await new_user_code.save();
  res.send(new_user_code);
});

referalController.post("/refer", async (req, res)=>{
    const {referalcode} = req.query;
   

    let updatedvalue = await ReferalModel.findOne({referalcode});
   
    let point = updatedvalue.point + 5;
   
    const referr = await ReferalModel.findOneAndUpdate({referalcode},{point},{new:true});
    
    const {userId,naam} = req.body;

    const len = await UserModel.find();

  const new_referalcode = `${naam.toLowerCase()}15${len.length}`;

  const new_user_code = new ReferalModel({ referalcode:new_referalcode, point: 10, userId });
  await new_user_code.save();
    res.send(new_user_code)
})


referalController.get('/detail', async (req,res) => {
  const {userId,name} = req.body;
 const result = await ReferalModel.findOne({userId});
  res.send(result);
})

module.exports = referalController;
