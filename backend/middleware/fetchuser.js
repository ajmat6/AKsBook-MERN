const jwt = require('jsonwebtoken');
const JWT_SECRET = "kathatajmatajmatkathat";

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to the req object
    //getting the token and verifying it
    const token = req.header('auth-token') // you will get authentication token through the header of the request
    if(!token)
    {
        res.status(401).json({error: "Please authenicate using a valid token"});
    }

    //extracting id from the token: It is put in try catch as token may not be valid
    try
    {
        const data = jwt.verify(token, JWT_SECRET); // verifying the token with the jwt secret string
        req.user = data.user; // getting the user (ki bhai jisne request kari vo kon he)
        next(); // next function is actually the function afterwards the place where you will put this middleware
    }
    catch(error)
    {
        res.status(401).json({error: "Please authenicate using a valid token"});
    }
}

module.exports = fetchuser;