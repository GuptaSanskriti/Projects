//Declaring global variables
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');

//iterating over section array and creating list dynamically
const secList = Array.from(document.getElementsByTagName('section'));
for (let i = 1; i <= secList.length; i++){
  //Creating elements for lists
  const listItem = document.createElement('li');
  listItem.className= 'section' + i;
  
  const secName = document.createElement('h4');
  const menu__link = document.createElement('a');
  menu__link.textContent = 'section-' + i;
  menu__link.setAttribute('href', '#section' + i );
  
  //adding elements to list
  navList.appendChild(listItem);
  secName.append(menu__link);
  listItem.append(secName);
  menu__link.classList.add('menu__link');
}

 document.addEventListener("scroll", function() {
   makeActive();
 });

//Checking viewport sections and highlighting that section
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

//adding smooth scroll through target
const links = document.querySelectorAll(".main__hero ul a");
for (const link of links) {
  link.addEventListener("click", sectionClick);
}
 
function sectionClick(e) {
  e.preventDefault();
  const secLink = this.getAttribute("href");
 
  document.querySelector(secLink).scrollIntoView({
    behavior: "smooth"
  });
}