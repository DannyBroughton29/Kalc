function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    return document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num==""){
        return document.getElementById("output-value").innerText=num;
    } else {
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
	if(num == "-"){
		return "0";
	}
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return  Number(num.replace(/,/g,""));
}

var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener('click',function(){
		if(this.id == "clear"){
			printHistory("");
			printOutput("0");
		}
		else if(this.id == "backspace"){
			var output = reverseNumberFormat(getOutput()).toString();
			if(output){
                output = output.substr(0,output.length-1);
                if(output == ""){
                    output = "0";
				}			
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output == "" && history != ""){
				if(isNaN(history[history.length-1])){
					history = history.substr(0,history.length-1);
				}
			}
			if(output != "" || history != ""){
				output = output == "" ? output:reverseNumberFormat(output);
				history = history + output;
				if(this.id == "="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history = history + this.id;
					printHistory(history);
					printOutput("0");
				}
			}
		}
		
	});
}

var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN){
            output = output+this.id;
            printOutput(output);
        }
    });
}

var checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', (event) => {
	if (event.target.checked){
		document.getElementById("style").setAttribute('href', 'dark.css');
	} else {
		document.getElementById("style").setAttribute('href', 'light.css');
	}
  })

