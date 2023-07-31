$(document).ready(onReady);

let calculation;
// array of operands to send over to convert into commands, perhaps?
let operands = ['+', '-', '*', '/']

let sum

function onReady() {
    console.log("HERE HERE!");

    // add, subtract, multiply, divide... so far
    
    


    $('#equals').on('click', submitCalculation);
    getCalculation();
    $('#clear').on('click', clear);

}

let submitCalculation = event => {
    event.preventDefault();
    console.log('in submitCalculation');
    const inputNumbers = {
        numberOne: $('#firstNumberInput').val(),
        numberTwo: $('#secondNumberInput').val(),
        operands: $('.operands[]').on('click')
    }


    // Ajax will communicate and send dat to the server
    $.ajax({
        method: "POST", // type of request
        url: "/calc", //route that will be used
        data: inputNumbers// Needs to be an object
    }).then((response) => {
        console.log("POST was successful", response) //Expect 201
        //getNumbers();
        //render();
    }).catch((error) => {
        console.log("Error with POST request", error);
        alert("Error with POST");


        getCalculation();
        render();
    })
    //$('#firstNumberInput').val("");
    //$('#secondNumberInput').val("");

    // Take some data and send to server
}

let getCalculation = () => {
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
        console.log(response);
        sum = response //Adds our numbers to the DOM (as long as the server is still running)
        render();

    }).catch((error) => {
        alert("Request failed")
        console.log("Request failed", error)
    })
}

let render = () => {
    $('#output').empty();
    // Looping over and appending to DOM
    for (let calculation of sum) {
        console.log(calculation);
        $('#output').append(`
            <li>
            ${calculation}
            </li>
      `)

    }

}

function clear() {
    console.log('in clear');
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');


}


