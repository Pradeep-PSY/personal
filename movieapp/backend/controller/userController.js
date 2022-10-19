const { Router } = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../model/User.Model");
const jwt = require("jsonwebtoken");

const userController = Router();

userController.get("/", (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  if(!token){
    return res.send({message:'Cannot get user'})
  }

  jwt.verify(token,'userbase',(err,decoded)=>{
    if(err){
        return res.send('Please login again')
    }

    if(decoded){
        return res.send(decoded)
    }
    
  })
});

userController.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const check = await UserModel.findOne({ email});

  if(check){
    return res.send('User Already Exist');
  }

  bcrypt.hash(password, 8, async function (err, hash) {
    if (err) {
      return res.send("singup failed");
    }

    const new_user = new UserModel({ email, name, password: hash });

    await new_user.save();

    res.send("singup success");
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.send("Please Signup first");
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.send("Invalid Credential");
    }

    if (result) {
      const token = jwt.sign({ email, userId: user._id, naam:user.name }, "userbase");

     return res.send({ message: "login Success", token });
    }
    else {
        return res.send({ message: "Invalid Credential"})
    }
  });
});

module.exports = userController;
