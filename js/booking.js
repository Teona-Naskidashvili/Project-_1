// burger bar
let navigation = document.getElementById('navbarlist');
let togglenav = document.getElementById('toggleburger');
let burgerOne = document.getElementById('burgerOne');
let burgerTwo = document.getElementById('burgerTwo');
let burgerThree = document.getElementById('burgerThree');

togglenav.addEventListener('click', function() {
    navigation.classList.toggle('activeNav');
    burgerOne.classList.toggle('oneline');
    burgerTwo.classList.toggle('twoline');
    burgerThree.classList.toggle('threeline');
}); 
 
 // validator

document.getElementById("registration").addEventListener("submit",function(event){
    event.preventDefault();
  
    let errors = {};
    let forms = event.target;
  
    let username = document.getElementById("username").value;
  
  
    if(username == "") {
        errors.username = "Username can not be empty";
    }
    
    let telNumber = document.querySelector("[name='phone']").value;
  
  
      if(isNaN(telNumber) || telNumber.length > 10 ) {
  
        errors.telNumber  = "Please enter correct Phone number";
     }
  
    //  let quantity = document.querySelector("[name = 'quantity']").value;
  
  
    //   if(isNaN(quantity) < 0 || isNaN(quantity)  > 20) {
  
    //     errors.quantity  = "Please enter correct number";
    //  }
  
  
  
     let agree = document.querySelector("[name = 'agree']").checked;
     
     
        if(!agree){
         errors.agree = " you must egree our condition";
     }
     
     console.log(errors);
  
  
     forms.querySelectorAll(".error-text").forEach(item=>{
         item.innerHTML = " ";
     });
  
  
     for( let item in errors){
         console.log(item);
        let errorSpan = document.getElementById("error_" + item);
        if(errorSpan){
            errorSpan.textContent = errors[item];
        }
  
     }
     if(Object.keys(errors).length == 0){
         forms.submit();
     }
  
  });

  
  function validation(){
    let emailfield = document.getElementById("emailmy").value;
    let emailSpan = document.getElementById("emailText");
    let emailvalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if(emailfield.match(emailvalidation)){
        emailSpan.innerHTML = "your email are corect";
        emailSpan.style.color = "green";
    } else {
        emailSpan.innerHTML = "your email are not corect";
        emailSpan.style.color = "red";
    }};
  
  function dateIsValid() {
    let datafield = document.getElementById("datetimepicker").value;
    let dataSpan = document.getElementById("spanData");
    let datavalidation = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if(datafield.match(datavalidation)) {
        dataSpan.innerHTML = "We are waiting";
        dataSpan.style.color = "green";
    } else {
        dataSpan.innerHTML = "Are you sure you are booking at the right time?";
        dataSpan.style.color = "red";
      
    }};
      