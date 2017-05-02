function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }  
   document.getElementById("resultText").style.color = "green";
}

function validateItems(num1, num2, num3) 
{
    clearErrors();

    if (num1 == "" || isNaN(num1)) {
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return "Starting Number must be filled in with a number.";
    }
   if (num2 == "" || isNaN(num2)) {
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error";
       document.forms["numberFun"]["num2"].focus();
       return "Ending Number must be filled in with a number.";
   }
   if (num3 == "" || isNaN(num3)) {
       document.forms["numberFun"]["num3"]
          .parentElement.className = "form-group has-error";
       document.forms["numberFun"]["num3"].focus();
       return "Step must be filled in with a number.";
   }
   if (num3 <= 0) {
       document.forms["numberFun"]["num3"]
          .parentElement.className = "form-group has-error";
       document.forms["numberFun"]["num3"].focus();
       return "Step must be a positive number.";
   }
   if (parseInt(num2) <= parseInt(num1)) {
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error";
       document.forms["numberFun"]["num2"].focus();
       return "Ending Number must be greater than Starting Number.";
   }
   return "valid";   
}

function showEvenNumbers() {
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    var num3 = document.forms["numberFun"]["num3"].value;

    var resultText  = "";
    var validate = validateItems(num1, num2, num3);
    if (validate == "valid")
    { 
        var evens = new Array();
        resultText = "Here are the even numbers between " + num1 + " and " + num2 + " by " + num3 + "\'s: ";

        var i = num1;
        while (i < parseInt(num2)) 
        { 
            if (i % 2 == 0)  
            {   
                evens.push(i);
            }    
            i = parseInt(i) + parseInt(num3);
        }

        for (var i = 0; i < evens.length; i++ )
        {
            resultText = resultText.concat("</br>", evens[i]);
        }
    
    }
    else
    {
       document.getElementById("resultText").style.color = "red";
       resultText = resultText.concat("Error! ", validate);
    }

    document.getElementById("resultText").style.display = "block";
    document.getElementById("resultText").innerHTML = resultText;
   /* We are returning false so that the form doesn't submit 
      and so that we can see the results*/
   return false;
}