const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// let's see if the two number inputs requested constitute an array
let numbers2BeCalculated = []

// functions addNumbers, subtractNumbers, multiplyNumbers, divideNumbers... so far
function addition(){
    console.log('in addition');
}

function subtraction(){
    console.log('in subtraction');
}

function multiplication(){
    console.log('in multiplication');
}

function division(){
    console.log('in division');
}





app.get('/numbers', (req, res) => {
    console.log("Arrived at /numbers", numbers2BeCalculated);




    // Server responds with the playerGuesses
    res.send(numbers2BeCalculated);

})




app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})
