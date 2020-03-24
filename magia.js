
const $logo = document.querySelectorAll('.navbar-nav')[0];
window.addEventListener('scroll', togglelogo, false);
function togglelogo(){
    if (window.pageYOffset >= 300 ){
        $logo.classList.remove('abs-nav');
        $logo.classList.add('nav-js');
    } else if (window.pageYOffset < 160 ) {
        $logo.classList.add('nav-dois');
        $logo.classList.remove('nav-três');
    }
}