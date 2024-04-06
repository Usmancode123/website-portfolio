function menuBar(){
    const menu =document.querySelector('ul.sidebar');
menu.style.display='block'
    // console.log(menu);
}
function hideMenu(){
    const menu =document.querySelector('ul.sidebar');
menu.style.display='none'
    // console.log(menu);
}

   //................... Theme change ..............//
    const icon =document.querySelector('#moon');

function changeMode(){

  document.body.classList.toggle('dark-theme')
  if(document.body.classList.contains('dark-theme')){
   icon.src='../website/dark theme icon/moon.png'
  }
  else{
    icon.src='../website/dark theme icon/sun.png'
  }
}




    

//............................... scroll ......................//

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
// console.log(navLinks);

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop  - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
   
