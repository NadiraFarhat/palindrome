const textInput = document.getElementById("text-input").value;
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
function checker(str) {
const splitInput = textInput.split("");
const junkOutput = splitInput?.replace(/[^0-9a-zA-Z_]/g, "");
const output = junkOutput.join()
const reverseOutput = junkOutput.reverse().join()


  if (output === reverseOutput) {
    result.innerHTML = `${textInput} is a palindrome.`
  } else {
    result.innerHTML = `${textInput} is not a palindrome.`
  }
}

function valid(str) {
  if(textInput === "") {
    alert("Please input a value.")
  } else {
    checker(textInput);
  }
}

checkButton.addEventListerner("click", checker)