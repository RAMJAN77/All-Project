
let btn = document.querySelector('#btn');
let ss = document.querySelector('#ss');
let show = true
btn.addEventListener('click', function(){
    if(show) {
        ss.style.display = 'none'
        show = false
        btn.innerHTML = 'Show'
    }else{
        ss.style.display = 'block'
        ss.style.color = 'red'
        show = true
        btn.innerHTML = 'Hide'
    }
})