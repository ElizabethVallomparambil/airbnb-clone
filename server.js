const express = require('express')
const app = express()
const PORT = 8080;
const HOST = '0.0.0.0';

app.set("view engine", "ejs")

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, HOST);



