
const jwt = require('jsonwebtoken')
// const secretKey = ;

module.exports=(req,res,next)=>{
     var token =  req.cookies && req.cookies.authToken || false
     if(!token)
     res.send(403).send("Invalid Token")
       
     jwt.verify(token ,process.env.JWT_SECRET,function(err,results){
        if(err){
            console.log(err);
            return res.status(401).send("Unauthorized")
        }
        next();
     })
     
}
