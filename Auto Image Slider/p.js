// let btn1 = document.getElementsByTagName('button')[0]
// let btn2 = document.getElementsByTagName('button')[1]
// let img = document.querySelector('img')

// let photos = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']
// let count = 0

// btn2.addEventListener('click', function(){
//   count++
//   if(count >= photos.length) {
//     count = 0
//     img.src = photos[count]
//   }else{
//     img.src = photos[count]
//   }
// })
// btn1.addEventListener('click', function() {
//   count--
//   if(count < 0) {
//     count = photos.length-1
//     img.src = photos[count]
//   }else{
//     img.src = photos[count]
//   }
// })

let i = 0
let imge = ['1.jpg','2.jpg','3.jpg','4.jpg']
let time = 4000

function imgChange(){
  document.slide.src = imge[i]

  if(i < imge.length - 1){
    i++
  }else{
    i = 0
  }setTimeout("imgChange()", 2000)//time//or
}window.onload = imgChange





























