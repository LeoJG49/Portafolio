const header = document.getElementById('dinamic-header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
})