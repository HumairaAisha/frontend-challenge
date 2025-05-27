const form = document.getElementById('validationForm')
const nameField = document.getElementById('name')
const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')

form.addEventListener('submit', function (event) {
   event.preventDefault();

   let valid = true;

   //name Validation
   const userName = document.getElementById('name').value;
   if(userName === '') {
      document.getElementById('nameError').textContent = "Please Enter Name"
      valid = false
   } else {
      document.getElementById('nameError').textContent = '';
      name.value = '';
   }
   //Email Validation
   const email = document.getElementById('email').value;
   if(!email.includes('@')) {
      document.getElementById('emailError').textContent ="Email must contain @";
      valid = false
   } else {
      document.getElementById('emailError').textContent = '';
   }
//password
   const password = document.getElementById('password').value;
   if(password.length < 6) {
      document.getElementById('passwordError').textContent ="Password must be atleast 6 characters"
      valid = false
   } else {
      document.getElementById('passwordError').textContent = '';
   }
   
   if (valid) {
      alert("Form Submitted Succesfully")
   }
});

//real time validation- remove error message 
nameField.addEventListener('input', function (event) {
   document.getElementById('nameError').textContent = '';
   nameField.classList.remove('error-field')
})

emailField.addEventListener('input', function (event) {
   document.getElementById('emailError').textContent = '';
   nameField.classList.remove('error-field')
})
passwordField.addEventListener('input', function (event) {
   document.getElementById('passwordError').textContent = '';
   nameField.classList.remove('error-field')
})