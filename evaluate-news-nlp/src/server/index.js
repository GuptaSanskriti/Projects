const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))
app.use(cors())

//declare API credentials
const apiKey = {key: process.env.API_KEY};

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/all', (req, res) => {
    res.send(apiKey)
});

// fetch url
app.post('/add', function(req, res){
    projectData = req.body;
    console.log(projectData);
    res.send({message: 'received'})
})

