let btn = document.getElementById('add-btn')
let inp = document.getElementById('inp')
let list = document.getElementById('list')
let todoCon = document.getElementById('todo-con')

btn.addEventListener('click', liAtem)
inp.addEventListener('keypress', function(event){
    if(event.which === 13) {
        liAtem()
    }
})


function liAtem(){
   let div = document.createElement('div')
   div.classList.add('todo')
   todoCon.appendChild(div)

   let ul = document.createElement('ul')
   ul.classList.add('list1')
   div.appendChild(ul)

    let li = document.createElement('li')
    li.classList.add('li')
    li.innerText = inp.value
    ul.appendChild(li)
    inp.value = ''

    

    

    // let awe1 = document.createElement('button')
    // awe1.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>'
    // list.appendChild(awe1)
    

    // let awe2 = document.createElement('button')
    // awe2.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    // list.appendChild(awe2)
}

