//--VARIABLES--//
const hero = document.getElementById("hero");
const nav = document.getElementById("nav");
const id = document.getElementById("logo");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const tabs = document.getElementById("tabs");
const tab = tabs.getElementsByClassName("tab");
const btn = document.getElementsByClassName("click-to-open");
const spans = document.getElementsByClassName("close");





//--FUCNTIONS--//
//Change Layout Function
function changeLayout() {
  hero.classList.remove("portfolio-wrapper");
  hero.classList.add("portfolio-wrapper-two");
  nav.classList.remove("navbar-wrapper");
  nav.classList.add("navbar-wrapper-two")
}
function closeLayout() {
  hero.classList.add("portfolio-wrapper");
  hero.classList.remove("portfolio-wrapper-two");
  nav.classList.add("navbar-wrapper");
  nav.classList.remove("navbar-wrapper-two")
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


//--LOOPS--//
//Add Active Class To The Current Button To Display Border 
for (i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
//Modal 
for (i = 0; i < btn.length; i++) {
  let thisBtn = btn[i];
  let thisSpan = spans[i]
  thisBtn.addEventListener("click", function(){
    //Show Current Modal
    let modal = document.getElementById(this.dataset.modal);
    modal.style.display = "block";
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    // When the user clicks on <span> (x), close the current modal
    thisSpan.onclick = function() {
      modal.style.display = "none";
    }
}, false)}











