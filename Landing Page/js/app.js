const data = [
  {
     id: 1,
     name: "section-1",
     info: "#section1"
  },
  {
      id: 2,
      name: "section-2",
      info: "#section2"
   },
   {
      id: 3,
      name: "section-3",
      info: "#section3"
   },
   {
      id: 4,
      name: "section-4",
      info: "#section4"
   }
  ];

const navMenu = document.querySelector('.navbar__menu'); 
const classes = ['section1', 'section2', 'section3', 'section4'];
const sections = document.querySelectorAll('section');

const buildCard = (card, classStyle) => {

const list = document.createElement('li');
list.classList.add(classStyle);
const sec_name = document.createElement('h4');
const menu__link = document.createElement('a');

navMenu.append(list);
sec_name.append(menu__link);
list.append(sec_name);

menu__link.textContent = card.name;
menu__link.setAttribute('href', card.info);
menu__link.classList.add('menu__link');
};

data.forEach((card, i) => {
  buildCard(card, classes[i]);
  });

const lists = document.querySelector('li');

function makeActive(){
    for(const section of sections){
        const box = section.getBoundingClientRect();
        if(box.top <= 150 && box.bottom >= 150){
          section.classList.add('your-active-class');
          document.querySelector('li.' + section.getAttribute('id')).classList.add('active');
        }
        else{
          section.classList.remove('your-active-class');
          document.querySelector('li.' + section.getAttribute('id')).classList.remove('active');
        }
    }
}

document.addEventListener("scroll", function() {
    makeActive();
  });