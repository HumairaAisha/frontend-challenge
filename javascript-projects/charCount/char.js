
const textField = document.getElementById('textField');
const countCharacter = document.getElementById('countCharacter');
const maxLength = 100;


textField.addEventListener('input', () =>{

   let currentLength = textField.value.length;
   if (currentLength > maxLength) {
      currentLength = maxLength
      
   }
   countCharacter.textContent = maxLength - currentLength
});

  