let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let inp = document.getElementById('inp')
let reset = document.getElementById('reset')
let sel = document.getElementById('sel')
let p1scr1 = 0
let p1scr2 = 0
let win = 5
let Gover = true
 
b1.addEventListener('click', ()=> {
 if(Gover) {
   p1scr1++
   winer(p1scr1, win)
}
  p1.innerHTML = p1scr1
})
b2.addEventListener('click', ()=> {
  if(Gover) {
    p1scr2++
    winer(p1scr2, win)
}
  p2.innerHTML = p1scr2
 })
function winer(old, win) {
  if(old === win) {
    Gover = false
    b1.setAttribute('disabled', 'disabled')
    b2.setAttribute('disabled', 'disabled')
    if(p1scr1 === win) {
      p1.style.color = 'red'
    } else {
      p2.style.color = 'red'
    }
  }
}
reset.addEventListener('click', rest)

function rest() {
  p1.innerHTML = '0'
  p2.innerHTML = '0'
  Gover = true
  p1scr1 = 0
  p1scr2 = 0
  b1.removeAttribute('disabled')
  b2.removeAttribute('disabled')
  p1.style = 'none'
  p2.style = 'none'
 
}

 inp.addEventListener('change', function() {
    win = Number(inp.value)
    sel.innerHTML = inp.value
    inp.value = ''
    rest()

 })









































// b1.addEventListener('click', ()=> {
//   if(Gover) {
//     p1scr1++
//     winer(win, p1scr1)
//   }
// p1.innerHTML = p1scr1
// })
// b2.addEventListener('click', ()=> {
//     if(Gover) {
//         p1scr2++
//         winer(win, p1scr2)
        
//     }
//    p2.innerHTML = p1scr2
//   })
//   function winer(win, old) {
//     if(win === old) {
//       Gover = false
//       b1.setAttribute('disabled', 'disabled')
//       b2.setAttribute('disabled', 'disabled')
//   }}
//   function resetb () {
//     p1scr1 = 0
//     p1scr2 = 0
//     Gover = true
//     p1.innerHTML = 0
//     p2.innerHTML = 0
//     b1.removeAttribute('disabled')
//     b2.removeAttribute('disabled')
//     p1.style.color = 'black'
     
//   }
//   reset.addEventListener('click', resetb)
 
//   inp.addEventListener('change', ()=> {
//     win = Number(inp.value)
//     sel.innerHTML = inp.value
//     inp.value = ''
//     resetb()
//   })

 

