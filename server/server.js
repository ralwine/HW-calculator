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
    //res.sendStatus(200)
})


app.post('/calc', (req, res) => {
    console.log("Body for submitcalculation:", req.body);
    // Looking at codechallenge#2 to bundle 
    const num1 = Number(req.body.numberOne)
    const num2 = Number(req.body.numberTwo)
    const operand = req.body.operand

    let sum = mathFunctions(num1, num2, operand);
    // let's see if we can something to append to the DOM first
    let newCalculation = {
        num1,
        num2,
        operand,
        sum
    }

    calculations.push(newCalculation)

    console.log("currentCalculations", newCalculation) // getting to here, coming back undefined
    res.sendStatus(201)
})

//let's knock this DELETE out!
app.delete('/calc', (req, res) => {
    console.log("at server DELETE")
    calculations = [] // set whole array to '0' / AKA DELETE!
})

// functions addNumbers, subtractNumbers, multiplyNumbers, divideNumbers... so far
function mathFunctions(value1, value2, oper) {
    console.log("In mathFunctions") // getting to mathfunctions still undefined
    // let's try if/else for this
    if (oper == '+') {
        return value1 + value2;
    }
    if (oper == '-') {
        return value1 - value2;
    }
    if (oper == '*') {
        return value1 * value2
    }
    if (oper == '/') {
        return value1 / value2
    }
    else {
        return undefined
        console.log("ERROR!")
    }

}


app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
