
let section2 = document.querySelector('.section2')
let colorPic = document.querySelector('.colorPic')
let header = document.querySelector('header')
let pp = document.querySelector('.pp')
let aew = document.querySelector('.awe')
let colors = ['blueviolet', 'brown', 'darkgray', 'darkolivegreen', 'teal','black']

for(color of colors) {
    let box = document.createElement('div')
    box.classList.add('sqare')
    box.style.backgroundColor = color
    colorPic.appendChild(box)

    box.addEventListener('click', function(){
        section2.style.backgroundColor = box.style.backgroundColor
        header.style.backgroundColor = box.style.backgroundColor
        aew.style.color = box.style.backgroundColor

    })
    box.addEventListener('mousemove', function(){
        this.style.boxShadow = '0 0 3px white' 
    })
    box.addEventListener('mouseout', function(){
        this.style.boxShadow = '0 0 0' 
    })
}
let section3 = document.querySelector('.section3')
let section4 = document.querySelector('.section4')
let colorPic1 = document.querySelector('.colorPic1')
let colorPic2 = document.querySelector('.colorPic2')
let colors1 = ['blueviolet', 'black', 'darkgray', 'darkolivegreen', 'teal', 'brown']
let colors2 = ['blueviolet', 'black', 'darkgray', 'darkolivegreen', 'teal', 'brown']

for(color1 of colors1){
    let box1 = document.createElement('div')
    box1.classList.add('sq1')
    box1.style.backgroundColor = color1
    colorPic1.appendChild(box1)
    box1.addEventListener('click', function(){
    section3.style.backgroundColor = box1.style.backgroundColor
    
    })
}

for(color2 of colors2){
    let con = document.createElement('div')
    con.classList.add('sq2')
    con.style.backgroundColor = color2
    colorPic2.appendChild(con)
    con.addEventListener('click', function(){
    section4.style.backgroundColor = con.style.backgroundColor
   
})
}
