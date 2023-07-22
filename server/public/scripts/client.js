$(document).ready(onReady);

function onReady() {
    console.log("HERE HERE!");

    // add, subtract, multiply, divide... so far
    $('#add').on('click', addition);
    $('#subtract').on('click', subtraction);
    $('#multiply').on('click', multiplication);
    $('#divide').on('click', division);

    $('#equals').on('click', equals);

    $('#clear').on('click', clear);

}

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

function clear() {
    console.log('in clear');
    
}

function equals() {
    console.log('in equals');

}
