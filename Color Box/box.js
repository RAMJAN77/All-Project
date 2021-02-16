// let con = document.querySelector('#contain');
// let h1 = document.querySelector('h1');
// let sc = document.querySelector('#Scolor');

// let colors = ['red','green','tomato','black','gray','blue'];

// for(color of colors) {
//   let box = document.createElement('div');
//   box.classList.add('box');
//   con.appendChild(box);
//   box.style.backgroundColor = color;
  
//   box.addEventListener('mouseover', function(){
//   h1.innerHTML = 'You have Selected :';
//   h1.style.color = box.style.backgroundColor;
//   sc.style.color = box.style.backgroundColor;
//   sc.style.backgroundColor = 'white'
//   sc.innerHTML = box.style.backgroundColor;
//   sc.style.border = '5px solid '
//   sc.style.borderColor = box.style.backgroundColor;

// })
// box.addEventListener('mouseout', function(){
    
//   h1.innerHTML = 'You have Select on a Color :';

//   sc.style.backgroundColor = '';
//   sc.innerHTML = ''
//   sc.style.border = 'none '
//   sc.style.borderColor = box.style.backgroundColor;
    
// })
  
// }
let con = document.querySelector('#contain');
let h1 = document.querySelector('h1');
let sc = document.querySelector('#Scolor');

let colors = ['red','green','tomato','black','gray','blue'];

for(color of colors) {
  let box = document.createElement('div')
  box.classList.add('box')
  con.appendChild(box)
  box.style.backgroundColor = color

  box.addEventListener('mouseover', ()=> {
    sc.style.backgroundColor = box.style.backgroundColor
    sc.innerHTML = box.style.backgroundColor

  })
}























