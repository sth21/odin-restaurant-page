import Icon from './coffee.png';
import renderHome from './home';
import renderMenu from './menu';
import renderAbout from './about';
import './nav.css';

let currentPage = 'home';

export default function renderNav() {
    let content = document.querySelector('#content');
    
    let nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    let branding = document.createElement('div');
    branding.classList.add('branding');

    let coffee = new Image();
    coffee.src = Icon;
    branding.appendChild(coffee);

    let logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.textContent = 'Java Script Coffee';
    branding.appendChild(logo);

    nav.appendChild(branding);

    let sections = document.createElement('div');
    sections.classList.add('sections');

    let homeBtn = document.createElement('button');
    homeBtn.classList.add('home');
    homeBtn.textContent = 'Home';
    sections.appendChild(homeBtn);
    homeBtn.addEventListener('click', toggle);

    let menuBtn = document.createElement('button');
    menuBtn.classList.add('menu');
    menuBtn.textContent = 'Menu';
    sections.appendChild(menuBtn);
    menuBtn.addEventListener('click', toggle);

    let aboutBtn = document.createElement('button');
    aboutBtn.classList.add('about');
    aboutBtn.textContent = 'About';
    sections.appendChild(aboutBtn);
    aboutBtn.addEventListener('click', toggle);

    nav.appendChild(sections);

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let signup = document.createElement('button');
    signup.classList.add('sign-up');
    signup.textContent = 'Sign Up';
    buttons.appendChild(signup);

    let login = document.createElement('button');
    login.classList.add('login');
    login.textContent = 'Log In';
    buttons.appendChild(login);

    nav.appendChild(buttons);

    content.appendChild(nav);
}

function toggle(event) {
    if (event.target.classList.contains('home') && currentPage === 'home') {
        return;
    } else if (event.target.classList.contains('about') && currentPage === 'about') {
        return;
    } else if (event.target.classList.contains('menu') && currentPage === 'menu') {
        return;
    }
    let removal = document.querySelector('#content > div:last-child');
    console.log(removal);
    removal.remove();
    if (event.target.classList.contains('home')) {
        currentPage = 'home';
        renderHome();
    } else if (event.target.classList.contains('menu')) {
        currentPage = 'menu';
        renderMenu();
    } else {
        currentPage = 'about';
        renderAbout();
    }
}