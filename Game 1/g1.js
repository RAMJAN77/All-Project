let sqare = document.querySelectorAll('.sqare')
let header = document.querySelector('.header')
let rgbc = document.getElementById('rgbc')
let corr = document.getElementById('corr')
let new1 = document.getElementById('new')
let easy = document.getElementById('easy')
let hard = document.getElementById('hard')

 let colors = genarateColor()

function match(color){
    for(let i = 0; i < sqare.length; i++) {
    sqare[i].style.background = picColor
}
}
function sr(){
let randomn = Math.floor(Math.random() * colors.length);
return randomn

}
function genarateColor(numbber) {
  let colors = []

  for(let i = 0; i < 6; i++) {
       let r = Math.floor(Math.random() * 256)
       let g = Math.floor(Math.random() * 256)
       let b = Math.floor(Math.random() * 256)
       let randomColor = "rgb" + "(" + r + ", " + g + ", " + b + ")" 
  
       colors.push(randomColor)
    }
  return colors
}
easy.addEventListener('click', function(){
    this.style.background = 'red'
    hard.style.background = 'none'
    colors = genarateColor(3)
    picColor = colors[sr()]
    rgbc.textContent = picColor;

    for(let i = 0; i < sqare.length; i++){
        if(colors[i]){
            sqare[i].style.background = colors[i]
        }else{
           
        }
    }
})
hard.addEventListener('click', function(){
    this.style.background = 'red'
    easy.style.background = 'none'
})
new1.addEventListener('click', function () {
    header.style.background = 'turquoise'
    corr.style.padding = '0'
    this.textContent = 'NEW COLORS'
    corr.textContent = ''
    colors = genarateColor(6)
    picColor = colors[sr()]
    rgbc.textContent = picColor;

    for(let i = 0; i < sqare.length; i++){
        sqare[i].style.background = colors[i]

  
    }


})
    let picColor = colors[sr()]
    rgbc.textContent = picColor;
    for(let i = 0; i < colors.length; i++) {
    sqare[i].style.backgroundColor = colors[i]
    
sqare[i].addEventListener('click', function() {
           let chose = this.style.backgroundColor
           
           if(picColor == chose) {
           corr.innerHTML = 'Correct!'
         
           corr.style.color = '#4af04a'
           header.style.background = picColor
           match()
           new1.textContent = 'PLAY AGAIN'

       }else{ 
           this.style.backgroundColor = 'transparent'
           corr.style.padding = '4.7px 15px'
           corr.innerHTML = 'Wrong'
           corr.style.background = 'white'
           corr.style.color = 'red'
       }
         })
}

