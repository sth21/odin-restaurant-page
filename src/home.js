import './home.css';
import TopIcon from './hometop.jpg';
import BottomIcon from './homebottom.jpg';

export default function renderHome() {
    let content = document.querySelector('#content');

    let home = document.createElement('div');
    home.setAttribute('id', 'home');

    let homeTop = document.createElement('div');
    homeTop.classList.add('home-top');

    let text1 = document.createElement('div');
    text1.classList.add('text');

    let text1header = document.createElement('h2');
    text1header.textContent = 'Enjoy the best coffee!';
    text1.appendChild(text1header);

    let text1para = document.createElement('p');
    text1para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget semper nunc, eget placerat nulla. Proin et dui at leo tempus finibus. Nullam tempus congue odio, ut scelerisque nisi sollicitudin at.';
    text1.appendChild(text1para);

    homeTop.appendChild(text1);

    let topImgDiv = document.createElement('div');
    topImgDiv.classList.add('image');

    let topImg = new Image();
    topImg.src = TopIcon;
    topImgDiv.appendChild(topImg);

    homeTop.appendChild(topImgDiv);

    home.appendChild(homeTop);

    let homeBottom = document.createElement('div');
    homeBottom.classList.add('home-bottom');

    let bottomImgDiv = document.createElement('div');
    bottomImgDiv.classList.add('image');

    let bottomImg = new Image();
    bottomImg.src = BottomIcon;
    bottomImgDiv.appendChild(bottomImg);

    homeBottom.appendChild(bottomImgDiv);

    let text2 = document.createElement('div');
    text2.classList.add('text');

    let text2header = document.createElement('h2');
    text2header.textContent = 'Your next cup on us!';
    text2.appendChild(text2header);

    let text2para = document.createElement('p');
    text2para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget semper nunc, eget placerat nulla. Proin et dui at leo tempus finibus. Nullam tempus congue odio, ut scelerisque nisi sollicitudin at.';
    text2.appendChild(text2para);

    homeBottom.appendChild(text2);

    home.appendChild(homeBottom);

    content.appendChild(home);
}