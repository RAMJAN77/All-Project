let btn = document.querySelector('button')
let hh = document.querySelector('.hh')


function binary(e) {
 e.preventDefault();
 let inp = document.querySelector('.inp').value //modde nite hobe
 let binaryNumber = Number(inp).toString(2)
 if(inp.value === '') {
     alert('Please Enter a Number :')
 }else if(inp.value < 0) {
     alert('Please Enter a Vailed Number :')
 }else{
     hh.style.color = "black"
     hh.innerHTML = binaryNumber
     inp = ''
     
 }
 
 
 
 
}
btn.addEventListener('click', binary)