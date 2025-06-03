const items = document.querySelectorAll('#list'); // to select the parent element, as before was set only on initial items
items.forEach(item => {
    item.addEventListener('click', () => {  
      alert('Clicked ' + item.textContent);
      console.log(items);
       
    });
});

document.getElementById('list').insertAdjacentHTML('beforeend', '<li>Item 3</li>');
document.getElementById('list').insertAdjacentHTML('beforeend', '<li>Item 5</li>');
document.getElementById('list').insertAdjacentHTML('beforeend', '<li>Item 7</li>');
 
  
  

  


  
  


