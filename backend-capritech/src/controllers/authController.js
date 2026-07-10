const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Response = require("../functions/response");

dotenv.config();
 const JWT_KEY_SECRET= process.env.JWT_KEY_SECRET || "12345678uytre"
const login = (req, res) => {
    const {userName, password} = req.body;
   if(userName == "" || password == ""){
    res.status(400);
    const response = new Response("error en login", null, "usuario y contraseña no contienen informacion")
    return res.json(response.json);
   }

   const  token = jwt.sign({user: userName}, JWT_KEY_SECRET, {expiresIn: "1h"});
   
   const response = new Response("login exitoso", {token}, null);
   console.log(response.json);
   res.json(response.json);
};

module.exports = {
    login
};