var toggleBtn = document.querySelector('#toggleBtn');
var nav = document.querySelector('#nav');

var expandBtn = document.getElementById('expandBtn');
var expandItem = document.querySelectorAll('#expandItem');
var expandContent = document.getElementById('expandContent');

// // driver function
// document.onclick = function(e) {
//     // toggle display for the navigation
//     if (e.target.id === 'toggleBtn') {
//         nav.classList.toggle('hidden');
//         nav.classList.toggle('transition-all');
//     }
//     // toggle display for the accordion item thingy
//     if (e.target.id === 'expandItem') {
//         expandContent.classList.toggle('hidden');
//         expandBtn.classList.toggle('rotate-180');
//     } 
// };

// driver function
document.onclick = function(e) {
    // toggle display for the navigation
    if (e.target.id === 'toggleBtn') {
        nav.classList.toggle('hidden');
        nav.classList.toggle('transition-all');
    }
    // toggle display for the accordion item thingy
    for (i = 0; i < expandItem.length; i++) {
        expandItem[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            expandBtn.classList.toggle('rotate-180');
            content.classList.toggle('hidden')
        });
    }
};
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