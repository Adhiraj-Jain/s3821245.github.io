const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const navTag = document.querySelector('nav');

console.log("REached in js file")
let scrolled = () => {
    console.log
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 10);
};

window.addEventListener('scroll', () => {
    console.log("Event listener is working!!");
    navTag.style.setProperty('background', scrolled() > 50 ? 'transparent' : 'var(--color1)');
});