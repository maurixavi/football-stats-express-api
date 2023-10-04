const express = require("express")

const app = express();
const port = process.env.PORT || 3000;
const res = require('express/lib/response');

app.get('/', function(req, res){
    res.json('This is my webscraper')
})

const teams = {
    "Penarol": "e2d73ee6",
    "Nacional": "26ebba72",
    "Danubio": "84985282",
    "Defensor-Sporting": "563b8846",
    "Montevideo-Wanderers": "81476932",
    "Plaza-Colonia": "e615d0fe",
    "Cerro-Largo": "7bc956f9",
    "Racing": "8d694a3d",
    "Fenix": "3a3a612e",
    "Torque": "03d0f9c5",
    "Cerro": "ee73b6b7",
    "Liverpool": "e87167c6",
    "Maldonado": "78455fe4",
    "River-Plate": "9ae9b58c",
    "La-Luz-FC": "d7fb2120",
    "Boston-River": "d10036ca",
};

app.get('/players/:team/:year', function(req, res){
    const team = req.params.team
    const year = req.params.year

    const idUrl = teams[team];

    const text = `The team is ${team} and the year is ${year}`
    res.send(text)

    console.log(team, year, idUrl)


})

app.listen(port, () => console.log(`server running on PORT ${port}`));