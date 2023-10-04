const express = require("express")

const app = express();
const port = process.env.PORT || 3000;
const res = require('express/lib/response');

app.get('/', function(req, res){
    res.json('This is my webscraper')
})

app.listen(port, () => console.log(`server running on PORT ${port}`));