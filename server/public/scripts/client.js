$(document).ready(onReady);

function onReady() {
    console.log("HERE HERE!");

    // add, subtract, multiply, divide... so far
    $('#add').on('click', addNumbers);
    $('#subtract').on('click', subtractNumbers);
    $('#multiply').on('click', multiplyNumbers);
    $('#divide').on('click', divideNumbers);

}

// functions addNumbers, subtractNumbers, multiplyNumbers, divideNumbers... so far
function addNumbers(){
    console.log('in addNumbers');
}

function subtractNumbers(){
    console.log('in subtractNumbers');
}

function multiplyNumbers(){
    console.log('in multiplyNumbers');
}

function divideNumbers(){
    console.log('in subtractNumbers');
}
