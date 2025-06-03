function getRandomBox(min, max) {
   const result = Math.floor(Math.random() * (max - min + 1)) + min
   return result;
   
   
}
// function to get random color
function getRandomColor() {
   const r = getRandomBox(0, 225); //using rgb color range from (0 - 225)
   const g = getRandomBox(0, 225);
   const b = getRandomBox(0, 225);
   const color = `rgb(${r},${g},${b})`;

   // console.log(color); //to check on which rgb color range was generated on the random box
   return color;
   
   
}  

const newBox = document.getElementById('generateBox');
newBox.addEventListener('click', () => {
   
   const box = document.createElement('div'); // create a new div
   //console.log(box); // to check the features of the box generated
   
   const boxSize = getRandomBox(50, 300)
   console.log(boxSize); // to check what size of random box was generated 
   
   const posX = getRandomBox(0, window.innerWidth - boxSize);
   const posY = getRandomBox(0, window.innerHeight - boxSize);

    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.backgroundColor = getRandomColor();
    box.style.position = 'absolute';
    box.style.left = posX + 'px';
    box.style.top = posY + 'px';
    box.style.borderRadius = '10px'

    
   // function to remove box on click
/*newBox.addEventListener('click', function(){
      document.body.removeChild(box);
   })*/
  
   document.body.appendChild(box) // to add the box to the body 
   //console.log(box);
   
   
})