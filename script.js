const hero = document.getElementById("hero");
const nav = document.getElementById("nav");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const tabs = document.getElementById("tabs");
const tab = tabs.getElementsByClassName("tab");

//Change Layout Function
function changeLayout() {
  hero.classList.remove("portfolio-wrapper");
  hero.classList.add("portfolio-wrapper-two");

  // nav.classList.remove('nav-wrapper');
  // nav.classList.add('nav-wrapper-two');
}

//Tab Functions
function showAbout() {
  changeLayout();
  projects.style.display = "none";
  contact.style.display = "none";
  about.style.display = "block";
}

function showProjects() {
  changeLayout();
  about.style.display = "none";
  contact.style.display = "none";
  projects.style.display = "block";
}

function showContact() {
  changeLayout();
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "block";
}


// Add active class to the current button to display border 
for (i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});