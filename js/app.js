$(document).ready(function() {
    $('.convert').on('click', function() {
        var userInput = +($('#userInput').val());
        checkValue(userInput);

    });

    clear();

});

function clear() {
    //clear html and texbox
    $('.clear').on('click', function() {
        $('.result').empty();
        $('#userInput').val('');
    });
}

function checkValue(value) {
    //check if value is a number
    if (isNaN(value)) {
        alert('Please enter a valid number');

    }
    //check if value is a decimal
    else if (value % 1 !== 0) {
        alert('Please enter a non decimal value');
    //check if value is between 1 and 100
    } else if (value < 1 || value > 100) {
        alert('Please make sure you\'ve entered a number between 1 and 100');
    }
     else {
        fizzbuzz(value);

    }
}


function fizzbuzz(num) {

    for (i = 1; i <= num; i++) {
        result = " ";
        //check if i is divisible by both 3 and 5
        if (i % 15 === 0) {
            result += "FizzBuzz <br>";
        }
        //check if i is divisible by 3
        else if (i % 3 === 0) {
            result += "Fizz <br>";
        }
        //check if i is divisible by 5
        else if (i % 5 === 0) {
            result += "Buzz <br>";
        }
        //print i
        else {
            result += i + '<br>';
        }
        appendToResult(result);

    }


}

function appendToResult(result) {
    //Append result of fizzbuzz to html
    $('.result').append(result);
}
