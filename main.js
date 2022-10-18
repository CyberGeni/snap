var toggleBtn = document.querySelector('#toggleBtn');
var nav = document.querySelector('#nav');

document.onclick = function(e) {
    if (e.target.id === 'toggleBtn') {
        nav.classList.toggle('hidden');
        nav.classList.toggle('transition-all');
    }
};
console.log(toggleBtn)
// var nav = document.querySelector('#nav');
// var body = document.querySelector('body');

// toggleBtn.addEventListener('click', function() {
//     nav.classList.toggle('hidden');
//     document.body.classList.toggle('overflow-hidden');
//     // body.classList.toggle('opacity-50');
//     alert('holaaa')
//     console.log('open navbar');
// });
console.log('main.js loaded');