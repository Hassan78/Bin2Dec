let convertForm = document.querySelector("form");
//event listener
convertForm.addEventListener("submit", binTodec);

//function
function binTodec(e) {
  e.preventDefault();
  let bin = document.getElementById("convert").value;
  //convert to binary
  let result = parseInt(bin, 2);
  //check the result if it is not a binary number
  if (isNaN(result)) {
    alert("Please enter a correct binary number! ");
    document.getElementById("show").innerHTML = "";
  } else {
    document.getElementById("show").innerHTML =
      bin + " is equivalent to: " + result;
  }
}
