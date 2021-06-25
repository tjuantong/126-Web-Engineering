//store necessary info of user for login
var loginData = {
    "Email": "",
    "Password": "",
    "RememberMe": Boolean
}

//gets first element with "login" class in document
const loginBtn = document.querySelector(".login");
let current = 0;

//login button event listener when clicked
loginBtn.addEventListener("click", function(event){
    var rememberMe = document.getElementById("rememberMe").checked; //store True/false in var rememberMe if checkbox is checked or not
    if(validateLogin()){    //to check if email and pw input is correct
        if (rememberMe){    //sets the boolean value as true for RememberMe in loginData if checked
            loginData.RememberMe = true;
        }else {             //sets the boolean value as false for RememberMe in loginData if unchecked
            loginData.RememberMe = false;
        }
        current += 1;
        console.log(loginData); //prints the loginData in the console
        //window.location.replace("userDashboard.html"); //redirect to userDashboard page if login is successful
    }

});

//function to validate email and password in login page
function validateLogin() {
    //const checkEmail = "jdelacruz@gmail.com";
    //const checkPw = "Juandela_00";
    var valid = true;

    //gets value of input email and password
    var email = document.getElementById("email").value;
    var pw = document.getElementById("password").value;

    /*if (email !=checkEmail && pw === checkPw){          //alert user wrong email address input
        valid = false;
        alert("Wrong email address.");
    } else if (email === checkEmail && pw!=checkPw){    //alert user wrong password input
        valid = false;
        alert("Wrong password.");
    } else if ((email != checkEmail) && (pw != checkPw)){   //alert user wrong login details
        valid = false;
        alert("Login details are wrong. Please try again.");
    } else {       //sets the email and password in the var loginData
        loginData.Email = email;
        loginData.Password = pw;
    }*/

    return valid;   //returns the boolean value of valid for the login button to evaluate
}