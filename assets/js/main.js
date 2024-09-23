'use strict';

// 1
let btn = document.querySelector('.btn');
// alert(btn.innerHTML);
btn.onclick = function (){
    btn.style.display = 'none';
}

// 2
let btn2 = document.querySelector('.btn2');
btn2.onclick = function(){
    document.getElementById('text').classList.add('click');
}

// 3
let text1 = document.getElementById('text1');
let btn3 = document.querySelector('.btn3');
btn3.onclick = function(){
    if(!text1.classList.contains('click')){
        text1.classList.add('click');
    }else{
        text1.classList.remove('click');
    }
}

// 4
document.addEventListener('click', (event) => {
    ball.style.left = `${event.clientX - 25}px`;
    ball.style.top = `${event.clientY - 25}px`;
    ball.style.transition = '.5s';
    ball.style.transform = 'rotate(360deg)';
  });
