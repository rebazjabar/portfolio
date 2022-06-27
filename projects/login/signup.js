function createAccount() {
    // Access HTML elements to interact with the value .
    var inputUsername = document.getElementById("username").value;
    var inputEmail = document.getElementById("email").value;
    var password = document.getElementById("fpassword").value;
    var ConfirmPassword = document.getElementById("cpassword").value;

    //Username validation : Accept Upercase letter 
    //Username validation : Accept Lowercase letter 
    //Username validation : Accept underscore character 
    var letters = /^[A-Za-z\_]+$/;
    //Email validation 
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //the Form can not be Empty 
    if (inputUsername == "" || inputEmail == "" || password == "" || ConfirmPassword == "") {
        alert('please fill all the form')

    }
    //checking the Username data if its compatable with letter validation rule or not 
    else if (!letters.test(inputUsername)) {
        alert('this kind of Username are not valid')
    }
    //checking the Email data if its compatable with  Email validation rule or not 
    else if (!email_val.test(inputEmail)) {
        alert('this kind of Email are not valid')
    }
    //checking the First Password is the same as Second Password 
    else if (password != ConfirmPassword) {
        alert('your Password are not match')
    }
    //the pasword can not be more than 15 
    else if (password.length > 15) {
        alert('your Password is too Long')

    }
    //the pasword can not be less than 6 
    else if (password.length < 6) {
        alert('your Password is too Short')
    }
    //if all the details are correct 
    else {
        alert('you created account successfully ')

        //return back to the login page 
        window.location = "login.html"
    }

}

function showPassword() {
    var x = document.getElementById("fpassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myFunction() {
    alert("Login successfully");
}

function signUp() {
    window.location = "signup.html"
}