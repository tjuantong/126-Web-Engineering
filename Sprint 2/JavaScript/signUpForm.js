var interests = [];

var webSeekerData = {
    "User": "",
    "FirstName": "",
    "LastName": "",
    "Age": "",
    "City": "",
    "Province": "",
    "Country": "",
    "Occupation": "",
    "School": "",
    "CourseYearLevel": "",
    "Interests": "",
    "Email": "",
    "Password": ""
}

var organizationData = {
  "User": "",
  "OrganizationName": "",
  "Affiliation": "",
  "OrgDescription": "",
  "FbLink": "",
  "TwtLink": "",
  "IgLink": "",
  "LkinLink": "",
  "Interests": ""
}


//declaration of constant variables
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".next");
const prevBtnSec = document.querySelector(".prev");
const submitBtn = document.querySelector(".submitbtn");
const contbtn = document.querySelector(".continuebtn");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

var user = document.getElementById("form").name;

//step number counter
let current = 1;

//Event listener for next button
nextBtnFirst.addEventListener("click", function(event){
  //prevents it to go to next page
  event.preventDefault();

  //check if form is webseeker sign up
  if(user == "webseeker"){
    //check if all required fields have inputs for webseeker sign up
    if(!validateFormWeb()) {
      alert("Input required field/s!");   //alerts user if required input fields doesn't have input
    }
    else{
      slidePage.style.marginLeft = "-25%";                    //move the next form page
      bullet[current - 1].classList.add("active");           //make the circle progress bar active and change color to indicate finished 
      progressCheck[current - 1].classList.add("active");   //shows check mark when next button is clicked
      progressText[current - 1].classList.add("active");    //make the text of progress bar active and change color to indicate finished
      current += 1;                                         //increment current by 1 to keep track of the progress bar and form page
    }
  } 
  //check if form is org sign up
  else if (user == "organization") {
    //check if all required fields have inputs for org sign up
    if(!validateFormOrg()) {
      alert("Input required field/s!");   //alerts user if required input fields doesn't have input
    }
    else{
      slidePage.style.marginLeft = "-25%";                    //move the next form page
      bullet[current - 1].classList.add("active");           //make the circle progress bar active and change color to indicate finished 
      progressCheck[current - 1].classList.add("active");   //shows check mark when next button is clicked
      progressText[current - 1].classList.add("active");    //make the text of progress bar active and change color to indicate finished
      current += 1;                                         //increment current by 1 to keep track of the progress bar and form page
    }
  }
  
});

//function to check if all required fields have inputs for webseeker sign up
function validateFormWeb() {
  var i, valid=true;
  var x = document.getElementsByClassName("page");
  var y= x[current-1].getElementsByTagName("input");
  var age = document.getElementById("age");
  var agevalue = age.value;

  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {     // If a field is empty
      valid = false;
      }
  }
    
    //checks if age input is valid or not
  if (agevalue != "" && (agevalue > 90 || agevalue < 12) ) {
    alert("Age must range from 12 to 90 only.")   //alert user if input age is not vaid
    valid = false;
  }
    
  return valid;   //return valid which is either true or false 

}

//function to check if all required fields have inputs for org sign up
function validateFormOrg() {
  var i, valid=true;
  var orgName = document.getElementById("orgName").value;
  var affiliated = document.getElementById("affiliated").value;
  var orgDescription = document.getElementById("orgDescription").value;

  //check if any of the required inputs is blank
  if (orgName == "" || affiliated == "" || orgDescription == ""){
    valid = false;
  }

  return valid;

}

//for email validation
function validateEmail() {
  var valid = true;
  var email = document.getElementById("email");
  var emailval = email.value;
  var password = document.getElementById("password");

  //to check if email input is an email address using regex
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var check = re.test(emailval); 

  //alert user once email address input is invalid
  if (!check && emailval!="") {
    alert("Invalid email address!");
    valid = false;
  }
  return valid;
}

//for password validation
function validatePassword() {
  var pw = document.getElementById("password");
  var pwval = pw.value;
  
  //regex that would check the characters of the password
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  
  var alertpw = new Array();
  alertpw[0] = "Invalid Password!"
  alertpw[1] = "Password must have the following:"
  alertpw[2] = "Length between 8 to 16 characters"
  alertpw[3] = "Must have atleast ONE uppercase letter"
  alertpw[4] = "Must have lowercase letters"
  alertpw[5] = "Must have numbers"
  alertpw[6] = "Must have atleast ONE special character"

  //checks if password input is valid or not
  if(pwval.match(re)){
    valid = true;
  }
  else{
    alert(alertpw.join("\n"));  //prints out the alertpw array by line
    valid = false;
  }
  return valid;
}

//event listener for submit button
submitBtn.addEventListener("click", function(){
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //alerts user if email and password is blank
  if (email==="" || password===""){
    alert("Input required field/s!");
  }
  //checks if email and password is valid
  else if (validateEmail() && validatePassword()){
    //move the nect page of form
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    
  }

  //for the checked progress bar
  if(current==3){
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
  }

  var x = document.getElementById("form").name;
  //if form is for webseeker
  if (x=="webseeker"){
    
    //stores id in a variable
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var age = document.getElementById("age");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var country = document.getElementById("country");
    var occupation = document.getElementById("occupation");
    var school = document.getElementById("school");
    var courseYrLvl = document.getElementById("courseYrLvl");
    var checkBox = document.getElementsByName("interest");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    //set values of input to the webSeekerData
    webSeekerData.FirstName = firstName.value;
    webSeekerData.LastName = lastName.value;
    webSeekerData.Age = age.value;
    webSeekerData.City = city.value;
    webSeekerData.Province = province.value;
    webSeekerData.Country = country.value;
    webSeekerData.Occupation = occupation.value;
    webSeekerData.School = school.value;
    webSeekerData.CourseYearLevel = courseYrLvl.value;
    webSeekerData.Email = email.value;
    webSeekerData.Password = password.value;

    //sets user as webseeker
    webSeekerData.User = x;

    //for the checked interests checkboxes
    for(var check of checkBox){
      if (check.checked){
        interests.push(check.value);    //adds to the interests list
      }
    }
    
    //sets the list in the interest var inside webseeker as a list
    webSeekerData.Interests = interests;

    console.log(webSeekerData);   //prints the data in the console

  }

  else if(x=="organization"){

    //stores id in a variable
    var orgName = document.getElementById("orgName");
    var affiliated = document.getElementById("affiliated");
    var orgDescription = document.getElementById("orgDescription");
    var fb = document.getElementById("fb");
    var twt = document.getElementById("twt");
    var ig = document.getElementById("ig");
    var lkin = document.getElementById("lkin");
    var checkBox = document.getElementsByName("interest");

    //set values of input to the webSeekerData
    organizationData.User = x;
    organizationData.OrganizationName = orgName.value;
    organizationData.Affiliation = affiliated.value;
    organizationData.OrgDescription = orgDescription.value;
    organizationData.FbLink = fb.value;
    organizationData.TwtLink = twt.value;
    organizationData.IgLink = ig.value;
    organizationData.LkinLink = lkin.value;

    //for the checked interests checkboxes
    for(var check of checkBox){
      if (check.checked){
        interests.push(check.value);    //adds to the interests list
        }
    }
    
    //sets the list in the interest var inside webseeker as a list
    organizationData.Interests = interests;

    console.log(organizationData);  //prints the data in console
    
  }
});

contbtn.addEventListener("click", function(event){
  event.preventDefault();
  window.location.replace("homePage.html");
});

//event listener for previous button
prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";

  //removes the active class for the progress bar 
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

