let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let show = false

btn.addEventListener('click', function(){
    if(show){
        h1.style.display = 'none'
        show = false
        btn.innerHTML = 'Show'
    }else{
        show = true
        h1.style.display = 'block'
        btn.innerHTML = 'Hide'
    }
})