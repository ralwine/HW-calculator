const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// let's see if the two number inputs requested constitute an array or not
// I know that I am doing this wrong, but this is the gist of it.
let calculations = []

// Create GET route
// Has a path: /calc
// Has anonymous function: has req and res
app.get('/calc', (req, res) => {
    console.log("Arrived at calculations", calculations)

    // Server is responding with the calculations
    res.send(calculations)
    res.sendStatus(200)
})


app.post('/calc', (req, res) => {
    console.log("Body for submitcalculation:", req.body);
    // Looking at codechallenge#2 to bundle 
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const operand = req.body.operand

    // let's see if we can something to append to the DOM first
    let newCalculation ={
        num1,
        num2,
        operand
    }

    calculations.push(newCalculation)

    console.log("currentCalculations", calculations)
    res.sendStatus(201)
})



// functions addNumbers, subtractNumbers, multiplyNumbers, divideNumbers... so far
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
