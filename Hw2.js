/*
Program: Hw2.html
Author: Zach Qi
Date: 2026/03/10
Version: 1.1
Description: Patient Registration Form
*/
/*JavaScript to display the current date and update the pain level slider value*/
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById ("today") .innerHTML = text;

slider = document. getElementById ("range-slider");
let output = document.getElementById ("slider-output")
output.innerHTML = slider.value;
slider.oninput = function () {output.innerHTML = this.value;};

//validating First Name 
function validateFname () {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z"-]+$/;
    // checks if first name field is empty
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {//checks if first name matches the pattern
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {// checks if first name has at least 2 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {//check if first doesnt have more than 30 characters
        document.getElementById ("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//Validating Middle inital
function validateMname () {
    let mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]$/;
    //makes middle inital uppercase
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;
    if (!mname.match(namePattern)) { //checks if middle inital matches pattern
        document. getElementById("mname-error").innerHTML = "Middle inital must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}

//validating Last Name 
function validateLname () {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z"-]+$/;
    // checks if last name field is empty
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) {//checks if last name matches the pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {// checks if last name has at least 2 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) {//check if last doesnt have more than 30 characters
        document.getElementById ("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}

//validating Date of Birth
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date can't be in the future.";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago.";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function validateSs() {
    const ssn = document.getElementById("ss").value;
   
    // regular expression to check if SSN is valid
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ss-error").innerHTML = "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ss-error").innerHTML = "";
        return true;
    }
}

// Js code for validating Address 1
function validateAdd1() {
    var ad1 = document.getElementById("add1").value;
    console.log(ad1);
    console.log(ad1.length);
    
    if (ad1.length < 2) {
        document.getElementById("add1-error").innerHTML = "Please enter a valid address";
        return false;
    } else {
        document.getElementById("add1-error").innerHTML = "";
        return true;
    }
}

//Js code for validating Address 2
function validateAdd2() {
    var ad2 = document.getElementById("add2").value;
    console.log(ad2);
    console.log(ad2.length);
    
    if (ad2.length < 2) {
        document.getElementById("add2-error").innerHTML = "Please enter N/A if you don't have an address on line 2";
        return false;
    } else {
        document.getElementById("add2-error").innerHTML = "";
        return true;
    }
}

//Js code for validating city
function validateCty() {
    city = document.getElementById("cty").value.trim(); 

    if (!city) {
        document.getElementById("cty-error").innerHTML = "City cannot be left blank";
        return false;
    } else {
        document.getElementById("cty-error").innerHTML = "";
        return true;
    }
}

//Js code for validating state
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); // Remove non-digit and non-hyphen characters

    if (!zip) {
        document.getElementById("zip-error").innerHTML = "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9); // remove all digits after the 5th digit
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//Js code for validating email function validateEmail
function validateEmail() {
    email = document.getElementById("email"). value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression pattern thing for email
    
    if (email == "") {
        document.getElementById("email-error").innerHTML = "Email Address cannot be empty";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid Email Address";
        return false;
    } else {
        document.getElementById("email-error"). innerHTML = "";
        return true;
    }
}

// Js code for validating phone number
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g,""); // removes all non-number characters

    if (phone.length != 10) {
        document.getElementById("phone-error").innerHTML = "Phone Number must be 10 digits";
        return false;
    }

    const formattedPhone =
    phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document. getElementById("phone-error").innerHTML = "";
    return true;
}

//Js code for validating user ID
function validateUser() {
    
    //makes user ID lowercase
    uid = document.getElementById("user").value.toLowerCase();
    
    //updates user ID field with lowercase value
    document.getElementById("user").value = uid;

    if (uid.length == 0) {
        document.getElementById("user-error").innerHTML = "User ID can't be blank";
        return false;
    }

    //checks if user ID doesn't start with a number
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("user-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    //regular expression to check if user ID only has letters, numbers, underscores, and dashes
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("user-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;

        //checks if user ID has at least 5 characters and no more than 30 characters
    } else if (uid.length < 5) {
        document.getElementById("user-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("user-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else { //if all conditions are met, clear error message and return true
        document.getElementById("user-error").innerHTML = "";
        return true;
    }
}

//Js code for validating password
function validatePwd() {
    const pass = document.getElementById("pwd").value;
    const username = document.getElementById("user").value;

    //sets up and initalizes array
    const errorMessage = [];

    //checks for lowercase letters
    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    //checks for uppercase letters
    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    //checks for numbers letters
    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }
    //checks for special characters
    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    //checks for username not in password
    if (pass == username || pass.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }
    //displays error message if theres errors
    const errorContainer = document.querySelector(".pwd-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
}

//Js code for validating re-entered password
function confirmPwd() {
    let pword1 = document.getElementById("pwd").value;
    let pword2 = document.getElementById("rpwd").value;
    let message = document.getElementById("rpwd-error");

    // Check if passwords match and display appropriate message
    if (pword1 !== pword2) {
        message.className = "nomatch";
        message.innerHTML = "Passwords don't match";
        return false;
    } else {//if passwords match, display message and return true
        message.className = "match";
        message.innerHTML = "Passwords match";
        return true;
    }
}

//Js code for reviewing user input and displaying it in a table
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//removes user inputs from the review table
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}