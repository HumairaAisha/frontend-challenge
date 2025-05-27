const input = document.getElementById('item-add');
const form = document.getElementById('formInput');
const itemList = document.getElementById('listItems')

form.addEventListener('submit', function (event) {
   event.preventDefault() 
   let textInput = input.value.trim();
   if (textInput !== '') {
      itemList.insertAdjacentHTML ('beforeend', `<li>${textInput} 
         <button class="remove-btn">Remove</button>
      </li>`);
      input.value = '';
   }
   
});

//handle remove button
itemList.addEventListener('click', function (event) {
   if (event.target.classList.contains('remove-btn')){
      event.target.closest('li').remove()
   }
})