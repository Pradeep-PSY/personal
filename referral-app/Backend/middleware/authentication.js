const jwt = require('jsonwebtoken');

const authentication = (req,res,next) =>{
    if(!req.headers.authorization) return res.send('Retry again')
    const token = req.headers.authorization.split(' ')[1]

    jwt.verify(token,'userbase', (err,decoded)=>{
        if(err){
            return res.send('login failed')
        }

        // console.log(decoded)
        if(decoded){
            req.body.userId = decoded.userId;
            req.body.name = decoded.name;
            next()
        }
    })
}

module.exports = authentication;