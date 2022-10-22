const { Router } = require("express");
const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ReferalModel = require("../model/ReferalModel");

const userController = Router();

userController.post("/register", async (req, res) => {
    // console.log(req.body)
  const { name, username, password, mobile  } = req.body;

  const check = await UserModel.findOne({ username });

  if (check) {
    return res.send("User Already Exist");
  }

  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      return res.send("singup failed");
    }

    const new_user = new UserModel({ username, name, password: hash ,mobile});

    await new_user.save();

    const len = await UserModel.find();

    

   const referalcode = `${name.toLowerCase()}15${len.length}`;

   const needId = await  UserModel.findOne({ username });
   

   const new_user_code = new ReferalModel({ referalcode, point: 0, userId:needId._id });
   await new_user_code.save();

  

    res.send("singup success");
  });
});


userController.post('/refer',async (req,res)=>{

  const {referalcode} = req.query;
  
  const { name, username, password, mobile  } = req.body;

   const check = await UserModel.findOne({ username });
   console.log(check)

  if (check) {
    return res.send("User Already Exist");
  }

  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      return res.send("singup failed");
    }

    const new_user = new UserModel({ username, name, password: hash ,mobile});

    await new_user.save();

    let updatedvalue = await ReferalModel.findOne({referalcode});

    let arr = [...updatedvalue.topersonrefered,username]
  
   
    let point = updatedvalue.point + 5;
   
    const referr = await ReferalModel.findOneAndUpdate({referalcode},{point,topersonrefered:arr},{new:true});
    
    const len = await UserModel.find();

    const new_referalcode = `${name.toLowerCase()}15${len.length}`;
    
    const needId = await  UserModel.findOne({ username });
  
    const new_user_code = new ReferalModel({ referalcode:new_referalcode, point: 10, userId:needId._id });
    await new_user_code.save();

    res.send("singup success");
  });

})

userController.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await UserModel.findOne({ username });
  console.log(user)
    if (!user) {
      return res.send({message:"Please Signup first",isAuth:false});
    }
  
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.send({ message: "Invalid Credential",isAuth:false});
      }
  
      if (result) {
        const token = jwt.sign({ username, userId: user._id, name:user.name }, "userbase");
  
       return res.send({ message: "login Success", token,isAuth:true });
      }
      else {
          return res.send({ message: "Invalid Credential",isAuth:false})
      }
    });
  });

  userController.post("/check", async (req, res) => {
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
  

module.exports = userController;
