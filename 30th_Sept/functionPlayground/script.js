(function(){
    console.log("Welcome to function playground !!")
})();

function add(a, b){
    return a+b;
}

document.getElementById("calcBtn").addEventListener("click", function(){
    const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
    console.log("Result : ", add(num1, num2))
})