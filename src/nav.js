import Icon from './coffee.png';
import './nav.css';

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

    let menuBtn = document.createElement('button');
    menuBtn.classList.add('menu');
    menuBtn.textContent = 'Menu';
    sections.appendChild(menuBtn);

    let aboutBtn = document.createElement('button');
    aboutBtn.classList.add('about');
    aboutBtn.textContent = 'About';
    sections.appendChild(aboutBtn);

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