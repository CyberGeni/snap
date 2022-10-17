var toggleBtn = document.querySelector('#toggleBtn');
var nav = document.querySelector('#nav');
var body = document.querySelector('body');

toggleBtn.addEventListener('click', function() {
    nav.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
    // body.classList.toggle('opacity-50');
    
    console.log('open navbar');
});
