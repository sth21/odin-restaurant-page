import './about.css';

export default function renderAbout() {
    let content = document.querySelector('#content');

    let about = document.createElement('div');
    about.setAttribute('id', 'about');


    let aboutHeaderDiv = document.createElement('div');
    aboutHeaderDiv.classList.add('header');

    let aboutHeader = document.createElement('h2');
    aboutHeader.textContent = 'About Us';
    aboutHeaderDiv.appendChild(aboutHeader);
    about.appendChild(aboutHeaderDiv);

    let aboutpara1 = document.createElement('p');
    aboutpara1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit pharetra diam sit amet egestas. Proin urna nunc, ultricies ullamcorper feugiat sit amet, cursus vel enim. Cras tortor lorem, dictum a aliquam nec, ultrices at tortor. Donec volutpat risus non ligula maximus mattis. Maecenas iaculis at lorem vel molestie. Sed rutrum viverra sapien, ut iaculis ipsum interdum at. Cras convallis leo nec urna interdum molestie ullamcorper ut mauris. In malesuada in purus sollicitudin consectetur. Aenean auctor suscipit nisi. Morbi dignissim dui et enim aliquam, ac semper nunc sodales. Donec ultrices turpis et enim aliquam feugiat. Etiam venenatis fermentum massa, vitae condimentum nisl.';
    about.appendChild(aboutpara1); 

    let aboutpara2 = document.createElement('p');
    aboutpara2.textContent = 'Maecenas egestas tellus eu tellus vehicula tincidunt. Nulla accumsan vitae justo et interdum. Pellentesque sed felis sit amet augue posuere porta. Aenean tincidunt ante vel nunc aliquet ultrices. Morbi sem ex, tincidunt vel tempus a, luctus et metus. Nam tincidunt ligula ut nulla tempus condimentum ac id elit. Aliquam placerat urna nec purus luctus placerat. Nullam quis viverra elit, id fringilla odio. Morbi nulla libero, ullamcorper ornare sem venenatis, ullamcorper finibus justo. Nullam lobortis ut mi non bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Morbi suscipit magna nulla, in ultrices ex luctus in. Nulla rutrum placerat fermentum. Phasellus tempor neque id tincidunt pharetra. Ut blandit mi quis arcu rhoncus venenatis.';
    about.appendChild(aboutpara2);
 
    let aboutpara3 = document.createElement('p');
    aboutpara3.textContent = 'Quisque fermentum, est viverra feugiat feugiat, lectus elit pellentesque sem, at bibendum dui orci ac metus. Etiam sit amet ante mi. Ut imperdiet pellentesque arcu. Quisque mattis feugiat ante at commodo. Fusce accumsan dui sed risus viverra, sed pulvinar sapien gravida. Fusce blandit dapibus felis, id ultrices tortor accumsan in. In convallis fringilla aliquet. Proin quis nunc erat. Aenean fringilla justo a elit sodales, eu consequat quam porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent venenatis felis eu enim semper viverra. Praesent accumsan tellus vel augue luctus vehicula.';
    about.appendChild(aboutpara3);

    let aboutpara4 = document.createElement('p');
    aboutpara4.textContent = 'Quisque fermentum, est viverra feugiat feugiat, lectus elit pellentesque sem, at bibendum dui orci ac metus. Etiam sit amet ante mi. Ut imperdiet pellentesque arcu. Quisque mattis feugiat ante at commodo. Fusce accumsan dui sed risus viverra, sed pulvinar sapien gravida. Fusce blandit dapibus felis, id ultrices tortor accumsan in. In convallis fringilla aliquet. Proin quis nunc erat. Aenean fringilla justo a elit sodales, eu consequat quam porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent venenatis felis eu enim semper viverra. Praesent accumsan tellus vel augue luctus vehicula.';
    about.appendChild(aboutpara4);

    let aboutpara5 = document.createElement('p');
    aboutpara5.textContent = 'Quisque fermentum, est viverra feugiat feugiat, lectus elit pellentesque sem, at bibendum dui orci ac metus. Etiam sit amet ante mi. Ut imperdiet pellentesque arcu. Quisque mattis feugiat ante at commodo. Fusce accumsan dui sed risus viverra, sed pulvinar sapien gravida. Fusce blandit dapibus felis, id ultrices tortor accumsan in. In convallis fringilla aliquet. Proin quis nunc erat. Aenean fringilla justo a elit sodales, eu consequat quam porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent venenatis felis eu enim semper viverra. Praesent accumsan tellus vel augue luctus vehicula.';
    about.appendChild(aboutpara5);

    content.appendChild(about);
}