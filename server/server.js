const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// let's see if the two number inputs requested constitute an array or not
let calculations = [
    
]

// Create GET route
    // Has a path: /returncalc
    // Has anonymous function: has req and res
    app.get('/returncalc', (req, res) => {
        console.log("Arrived at /quotes", calculations)
    
        // Server is responding with the calculations
        res.send(calculations)
        // res.sendStatus(200)
    })
    

    
    app.post('/submitcalc',(req, res) => {
        console.log("Body for submitcalculation:", req.body);
    
        let newCalculation = req.body
        calculations.push(newCalculation)
    
        console.log("currentCalculations", calculations)
        res.sendStatus(201)
    })



// functions addNumbers, subtractNumbers, multiplyNumbers, divideNumbers... so far
app.listen(port, () => {
    console.log('listening on port', port)
})
