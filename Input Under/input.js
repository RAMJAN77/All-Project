let inp =  document.querySelector('#inp')
let ul = document.querySelector('ul')

inp.addEventListener('keypress', (event)  => {
    if(event.keyCode == 13) {
        let nam = event.target.value
        
        let li = document.createElement('li')
        li.innerHTML = nam
        ul.appendChild(li)
        event.target.value = ''

        let span = document.createElement('span')
        span.innerHTML = 'x'
        span.style.float = 'right'
        span.style.color= 'red'
        span.style.cursor= 'pointer'
        li.appendChild(span)

        span.addEventListener('click', () => {
            ul.removeChild(li)
        })

    }
})