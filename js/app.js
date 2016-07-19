$(document).ready(function(){
	
	$('.convert').on('click', function(){
		var userInput = +($('#userInput').val());
		checkValue(userInput);
	
	}),

	$('.clear').on('click', function(){
		$('.result').empty();
		$('#userInput').val('');
	})

	
});

function checkValue(value){
	if(isNaN(value)){
			alert('Please enter a valid number');
			
		}
	else if(value % 1 != 0){
			alert('Please enter a non decimal value');
			
		}
	else{
			fizzbuzz(value);

		}
};

function fizzbuzz(num){

	for(i=1; i<=num; i++){
		//check if i is divisible by both 3 and 5
		if((i%3 === 0) && (i%5 === 0)){
			$('.result').append('FizzBuzz <br>');
		}
		//check if i is divisible by 3
		else if (i%3 === 0) {
			$('.result').append('Fizz <br>');
		}
		//check if i is divisible by 5
		else if (i%5 === 0) {
			$('.result').append('Buzz <br>');
		}
		//print i
		else{
			$('.result').append(i + '<br>');
		}
	};

}

