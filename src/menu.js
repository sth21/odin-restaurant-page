import './menu.css';

export default function renderMenu() {
    let content = document.querySelector('#content');

    let menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    //Section 1
    let menuSection1 = document.createElement('div');
    menuSection1.classList.add('menu-section');

    let section1header = document.createElement('h3');
    section1header.textContent = 'Coffee';
    menuSection1.appendChild(section1header);

    let section1item1 = document.createElement('div');
    section1item1.classList.add('menu-item');
    let coffee1 = document.createElement('p');
    coffee1.textContent = 'Americano';
    section1item1.appendChild(coffee1);
    let coffee1price = document.createElement('p');
    coffee1price.textContent = '$1.50';
    section1item1.appendChild(coffee1price);
    menuSection1.appendChild(section1item1);

    let section1item2 = document.createElement('div');
    section1item2.classList.add('menu-item');
    let coffee2 = document.createElement('p');
    coffee2.textContent = 'Espresso';
    section1item2.appendChild(coffee2);
    let coffee2price = document.createElement('p');
    coffee2price.textContent = '$1.75';
    section1item2.appendChild(coffee2price);
    menuSection1.appendChild(section1item2);

    let section1item3 = document.createElement('div');
    section1item3.classList.add('menu-item');
    let coffee3 = document.createElement('p');
    coffee3.textContent = 'Latte';
    section1item3.appendChild(coffee3);
    let coffee3price = document.createElement('p');
    coffee3price.textContent = '$2.00';
    section1item3.appendChild(coffee3price);
    menuSection1.appendChild(section1item3);

    let section1item4 = document.createElement('div');
    section1item4.classList.add('menu-item');
    let coffee4 = document.createElement('p');
    coffee4.textContent = 'Mocha';
    section1item4.appendChild(coffee4);
    let coffee4price = document.createElement('p');
    coffee4price.textContent = '$2.00';
    section1item4.appendChild(coffee4price);
    menuSection1.appendChild(section1item4);

    menu.appendChild(menuSection1);

    //Section 2
    let menuSection2 = document.createElement('div');
    menuSection2.classList.add('menu-section');

    let section2header = document.createElement('h3');
    section2header.textContent = 'Other Drinks';
    menuSection2.appendChild(section2header);

    let section2item1 = document.createElement('div');
    section2item1.classList.add('menu-item');
    let drink1 = document.createElement('p');
    drink1.textContent = 'Hot Chocolate';
    section2item1.appendChild(drink1);
    let drink1price = document.createElement('p');
    drink1price.textContent = '$1.50';
    section2item1.appendChild(drink1price);
    menuSection2.appendChild(section2item1);

    let section2item2 = document.createElement('div');
    section2item2.classList.add('menu-item');
    let drink2 = document.createElement('p');
    drink2.textContent = 'Tea';
    section2item2.appendChild(drink2);
    let drink2price = document.createElement('p');
    drink2price.textContent = '$1.25';
    section2item2.appendChild(drink2price);
    menuSection2.appendChild(section2item2);

    let section2item3 = document.createElement('div');
    section2item3.classList.add('menu-item');
    let drink3 = document.createElement('p');
    drink3.textContent = 'Orange Juice';
    section2item3.appendChild(drink3);
    let drink3price = document.createElement('p');
    drink3price.textContent = '$1.75';
    section2item3.appendChild(drink3price);
    menuSection2.appendChild(section2item3);

    let section2item4 = document.createElement('div');
    section2item4.classList.add('menu-item');
    let drink4 = document.createElement('p');
    drink4.textContent = 'Bottled Water';
    section2item4.appendChild(drink4);
    let drink4price = document.createElement('p');
    drink4price.textContent = '$1.00';
    section2item4.appendChild(drink4price);
    menuSection2.appendChild(section2item4);

    menu.appendChild(menuSection2);

    //Section 3
    let menuSection3 = document.createElement('div');
    menuSection3.classList.add('menu-section');

    let section3header = document.createElement('h3');
    section3header.textContent = 'Small Bites';
    menuSection3.appendChild(section3header);

    let section3item1 = document.createElement('div');
    section3item1.classList.add('menu-item');
    let food1 = document.createElement('p');
    food1.textContent = 'Hot Bagel';
    section3item1.appendChild(food1);
    let food1price = document.createElement('p');
    food1price.textContent = '$2.00';
    section3item1.appendChild(food1price);
    menuSection3.appendChild(section3item1);

    let section3item2 = document.createElement('div');
    section3item2.classList.add('menu-item');
    let food2 = document.createElement('p');
    food2.textContent = 'Doughnut';
    section3item2.appendChild(food2);
    let food2price = document.createElement('p');
    food2price.textContent = '$1.75';
    section3item2.appendChild(food2price);
    menuSection3.appendChild(section3item2);

    let section3item3 = document.createElement('div');
    section3item3.classList.add('menu-item');
    let food3 = document.createElement('p');
    food3.textContent = 'Pastry of the Day';
    section3item3.appendChild(food3);
    let food3price = document.createElement('p');
    food3price.textContent = '$2.00';
    section3item3.appendChild(food3price);
    menuSection3.appendChild(section3item3);

    let section3item4 = document.createElement('div');
    section3item4.classList.add('menu-item');
    let food4 = document.createElement('p');
    food4.textContent = 'Cake Pop';
    section3item4.appendChild(food4);
    let food4price = document.createElement('p');
    food4price.textContent = '$1.25';
    section3item4.appendChild(food4price);
    menuSection3.appendChild(section3item4);

    menu.appendChild(menuSection3);

    content.appendChild(menu);
}