let photos = ['./photos/1.jpg','./photos/2.jpg','./photos/3.jpg','./photos/4.jpg','./photos/5.jpg','./photos/6.jpg','./photos/7.jpg','./photos/8.jpg','./photos/9.jpg','./photos/10.jpg','./photos/11.jpg','./photos/12.jpg','./photos/13.jpg'];
let img = document.querySelector('img');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

let count = 0;

btn1.addEventListener('click', function () {
      count++;
  
      img.src = photos[count];
      if(count >= photos.length) {
          count = 0;
          
      }else{
        img.src = photos[count];
      }
});
btn2.addEventListener('click', function () {
    count--;
 

    if(count <= 0) {
        count = photos.length-1;
        img.src = photos[count];
    }else{
      img.src = photos[count];
    }
});

// let photos = ['./photos/1.jpg','./photos/2.jpg','./photos/3.jpg','./photos/4.jpg','./photos/5.jpg','./photos/6.jpg','./photos/7.jpg','./photos/8.jpg','./photos/9.jpg','./photos/10.jpg','./photos/11.jpg','./photos/12.jpg','./photos/13.jpg'];
// let img = document.querySelector('img');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');

// let count = 0;

// btn1.addEventListener('click', ()=> {
 
//   if(count >= photos.length) {
//    count = 0
//    img.src = photos[count]
//  }else{
//   count++
//   img.src = photos[count]
//  }

// })

// btn2.addEventListener('click', ()=> {
 
//   if(count <= 0) {
//     count = photos.length-1
//     img.src = photos[count]
//   }else{
//    count--
//    img.src = photos[count]
//   }
 
//  })