const navlist =document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');
//click event listener
hamburger.addEventListener('click', () => {
    navlist.classList.toggle('navlist-active');
});