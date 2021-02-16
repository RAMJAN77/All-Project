let Name = document.getElementById('Name');
let Age = document.getElementById('Age');
let Address = document.getElementById('Address');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let p = document.getElementById('p');

btn.addEventListener('click', function(e){
    e.preventDefault();

if(Name.value == '' && Age.value == '' && Address.value == '' ){
    alert('please something');
}else{
    let tr = document.createElement('tr');

    let th = document.createElement('td');
    th.innerHTML = Name.value;
    th.classList.add('td')
    tr.appendChild(th);

    
    let th1 = document.createElement('td');
    th1.innerHTML = Address.value;
    th1.classList.add('td')
    tr.appendChild(th1);

    
    let th2 = document.createElement('td');
    th2.innerHTML = Age.value;
    th2.classList.add('td');
    tr.appendChild(th2);
     


    list.appendChild(tr);
}

})






























// btn.addEventListener('click', function(e) {
//     e.preventDefault();

//     if(Name.value === '' && Age.value === '' && Address.value === '') {
//     alert('Enter a digit')

// }else{
//      let row = document.createElement('tr');


//      let Th = document.createElement('th');
//      Th.innerHTML = Name.value;
//      row.appendChild(Th);

//      let Th1 = document.createElement('th');
//      Th1.innerHTML = Age.value;
//      row.appendChild(Th1);

//      let Th2 = document.createElement('th');
//      Th2.innerHTML = Address.value;
//      row.appendChild(Th2);

//      list.appendChild(row);
// }

// })