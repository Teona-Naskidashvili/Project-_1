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
  
  
      if(isNaN(telNumber) ) {
  
        errors.telNumber  = "Please enter correct Phone number";
     }
  
     let quantity = document.querySelector("[name = 'quantity']").value;
  
  
      if(isNaN(quantity) < 0 || isNaN(quantity)  > 20) {
  
        errors.quantity  = "Please enter correct number";
     }
  
  
  
     let agree = document.querySelector("[name = 'agree']").checked;
     
     
        if(!agree){
         errors.agree = " you must egree our condition";
     }
  
  
    //  let ckeckedage = false;
    //  forms.querySelectorAll("[name = 'age']").forEach(element => {
    //      if(element.checked){
    //         ckeckedage = true;
    //      }
    //  });
  
    //  if(ckeckedage == false){
    //      errors.age = "pleace select your age";
    //  }
     
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
  
  // let passwordshow = document.getElementById("password2");
  // let toggleicon = document.getElementById("toggleicon");
  // showhidepassword = () => {
  //    if (passwordshow.type == "password"){
  //     passwordshow.setAttribute("type","text");
  //     toggleicon.classList.add("fa-eye-slash")
  //    } else{
  //     toggleicon.classList.remove("fa-eye-slash");
  //     passwordshow.setAttribute("type","password");
  
  //    }
  // }
  // toggleicon.addEventListener("click", showhidepassword );
  
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
      