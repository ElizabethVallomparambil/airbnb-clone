const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const app = express()
const PORT = 8080;
const HOST = '0.0.0.0';

// Set up Global configuration access
dotenv.config();

app.use(function(err, req, res, next) {
    res.status(err.status || 500).json(response.error(err.status || 500));
});

app.set("view engine", "ejs")

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, HOST);

// Generating JWT
app.post("/jwt/generateToken", (req, res) => {
    
    const { firstName, lastName, email, password } = req.body;
    // Validate user input
    if (!(email && password && firstName && lastName)) {
        res.status(400).send("All input is required");
      }
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let user_data = { 
        firstName: lastName, email 
    }
    const token = jwt.sign(user_data, jwtSecretKey);
    res.send(token);
});

// Verification of JWT
app.get("/jwt/validateToken", (req, res) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            return res.status(401).send(error); // Access Denied
        }
    } catch (error) {
        return res.status(401).send(error);  // Access Denied
    }
});

