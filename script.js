function compute() {
    //Input values and calculating Simple Interest
    var principal = parseFloat(document.getElementById("principal").value);
    if(isNaN(principal)|| principal<1){
      alert("Enter a positive Number!");
      return principal;
   }
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;

    //Interest Text displayed on calling Compute function
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";
}

// Function for updating Rate
function updateRate()
{
    var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
}
       
