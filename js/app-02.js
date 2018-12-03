/* 02 - FORM VALIDATION :: YOUR CODE BELOW */


var form = document.getElementById("registration-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  //Variables
  var username = e.target.elements.username;
  var password = e.target.elements.userpassword;
  var confirmPassword = e.target.elements.confirmpassword;
  var taxId = e.target.elements.taxid;
  var accountType = e.target.elements.account;
  var confirmation= e.target.elements.termsofservice;
  //Variables error
  var errorUsername = document.querySelector(".validation--username");
  var errorPassword = document.querySelector(".validation--user-password");
  var errorConfirmPassword = document.querySelector(".validation--confirm-password");
  var errorTaxId = document.querySelector(".validation--tax-id");
  var errorAccountType = document.querySelector(".validation--account");
  var errorConfirmation = document.querySelector(".validation--terms-of-service");
  var validationEntire = document.querySelector(".validation--entire-form");

  //Nombre de usuario
  if (username.value  !== "") {
   errorUsername.innerText = "Success";
   
    
  } else {
  	errorUsername.innerText = "Username cannot be blank";
  }
 

  //Password
  if (password.value.length  >= 8) {
    errorPassword.innerText = "Success"
    
  } else {
  	errorPassword.innerText = "Password must have a minimun of 8 characters";
  }


  //Confirmaciòn de password
 
  if (confirmPassword.value === password.value && confirmPassword.value.length >= 8 ) {
    errorConfirmPassword.innerText = "Success"
    
  } else {
  	errorConfirmPassword.innerText = "Pasword must match"
  }
  	

  //Id

  if(taxId.value === ""){
  	errorTaxId.innerText = "Must provide Tax ID Number";
  	} else if(taxId.value.length === 10 && /^([0-9]{10})$/i.test(taxId.value)){
  		errorTaxId.innerText = "Success";
  	} else {
  		errorTaxId.innerText = "Tax ID number is only numbers and is 10 digits";
  	} 

   

  //Validaciòn Cuenta
  if(accountType.value !== ""){
		errorAccountType.innerText = "Success";
    } else{
		errorAccountType.innerText = "Must select account type";
    }


  // Validacion Terminos
  if(confirmation.checked === true){
		errorConfirmation.innerText = "Success";
	} else {
		errorConfirmation.innerText = "Must approve terms of service";
	}


   //Validacion todo
   if(errorUsername.innerText && errorPassword.innerText && errorConfirmPassword.innerText && errorTaxId.innerText && errorAccountType.innerText && errorConfirmation.innerText === "Success"){
   		validationEntire.innerText = "Form COmplete";
   } else {
   	 	validationEntire.innerText = "";
   }




});



