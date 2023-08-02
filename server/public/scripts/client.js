$(document).ready(onReady);


//let calculation;
// array of operands to send over to convert into commands, perhaps?
// const operands = ['+', '-', '*', '/'] // operands are being sent undefined
let operand;


function onReady() {
    console.log("HERE HERE!");

    // add, subtract, multiply, divide... so far
    getCalculation()
    // listener for +-*/ is working
    $('.isOperand').on('click', chooseOperand);
    // listener for = is working
    $('#equals').on('click', submitCalculation);
    // listener for clear is working
    $('#clear').on('click', clear);
    // button to clear all history
    $('#allClear').on('click', clearAllCalculations);

}

function submitCalculation(event) {
    event.preventDefault();
    //console.log('in submitCalculation');
    console.log("clicking on: ", $(this));

    //move these ahead of the object you are making
    const numberOne = $('#firstNumberInput').val();
    const numberTwo = $('#secondNumberInput').val();
    // this object
    const inputNumbers = {
        numberOne,
        numberTwo,
        operand
    }


    // Ajax will communicate and send dat to the server
    $.ajax({
        method: 'POST', // type of request
        url: "/calc", //route that will be used
        data: inputNumbers// Needs to be an object
    }).then((response) => {
        console.log("POST was successful", response) //Expect 201
        getCalculation();
        //render();
    }).catch((error) => {
        console.log("Error with POST request", error);
        alert("Error with POST");
    })
    //$('#firstNumberInput').val("");
    //$('#secondNumberInput').val("");

    // Take some data and send to server
}

function chooseOperand(){
    console.log("In ChooseOperand")
    console.log( $(this).text())
    //
    operand = $(this).text()

}


function getCalculation() {
    // Use Ajax to retrieve (GET) quotes from server
    // Server endpooint: /quotes
    console.log('inside result');
    //   AJAX
    $.ajax({
        // Tells Ajax how to communicate with server,
        // also tells Ajax where to go on the server
        method: 'GET',
        url: '/calc'
    }).then((response) => {
        console.log("GET client side responding!", response);
        render(response) //Adds our numbers to the DOM (as long as the server is still running)


    }).catch((error) => {
        alert("Request failed")
        console.log("Request failed", error)
    })
}

function render(calculations) {
    $('#output').empty();
    // Looping over and appending to DOM
    for (let calculation of calculations) {
        console.log("in render", calculation);
        $('#output').append(`
            <li>
            ${calculation.num1} ${calculation.operand} ${calculation.num2} = ${calculation.sum}
            </li>
      `)

    }

}
// you're not appending anything because there is no #output to append to!
function clear() {
    console.log('in clear');
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');


}

function clearAllCalculations() {
    // make button to clear history... er rather screen (It does look cool!)
    console.log('in clearAllCalculations');
    $('#output').remove()
}