import Icon from './coffee.png';

export default function renderNav() {
    let content = document.querySelector('#content');
    
    let nav = document.createElement('div');
    nav.setAttribute('id', 'nav');
    content.appendChild(nav);

    let branding = document.createElement('div');
    branding.classList.add('branding');

    let coffee = new Image();
    coffee.src = Icon;
    branding.appendChild(coffee);

    let logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.textContent = 'Java Script';
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

    let coffee2 = new Image();
    coffee2.src = Icon;
    sections.appendChild(coffee2);

    nav.appendChild(sections);

    content.appendChild(nav);
}