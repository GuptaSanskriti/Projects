projectData = {};

/* Express to run server and routes */
const express = require('express');
/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('ServerClient'));

const port = 8000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening(){
    //console.log('server running');
    console.log(`running on localhost: ${port}`);
}

//Add animal;
const fakeData = {
    animal: 'lion',
    fact: "they're dangerous"
};

app.get('/fakeAnimalData', getfakeData)

function getfakeData(req, res){
  res.send(fakeData)
};

const animalData = [];

app.get('/all', getData)

function getData(req, res){
     res.send(animalData)
     console.log(animalData)
}

app.post('/addAnimal', addAnimal);

function addAnimal(req, res){
    newEntry ={
        animal: req.body.animal,
        facts: req.body.fact,
        fav: req.body.fav
    }

    animalData.push(newEntry);
    res.send(animalData);
    console.log(animalData);
}
