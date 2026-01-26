const header = document.getElementById('dinamic-header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) { //When scroll is more than 50px assing the class
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink'); 
    }
})