// -----------------------------------------------------------------------------
// RETURN TO TOP BUTTON
// -----------------------------------------------------------------------------

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// -----------------------------------------------------------------------------
// NAVBAR
// -----------------------------------------------------------------------------
// Toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='far fa-times-circle'></i>";
  }
}
toggle.addEventListener('click', toggleMenu, false);

//image instead of fontawesome as a burger menu
// function toggleMenu() {
//   if (menu.classList.contains("active")) {
//     menu.classList.remove("active");
//     toggle.querySelector("img").style.width = '100%';
//     toggle.querySelector("img").src = "img/burger-menu.png";
//   } else {
//     menu.classList.add("active");
//     toggle.querySelector("img").style.width = '0.8em';
//     toggle.querySelector("img").src = "img/cancel-copy.png";
//   }
// }

// Submenu
const items = document.querySelectorAll('.item');

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

for (let item of items) {
  if (item.querySelector('.submenu')) {
    item.addEventListener('click', toggleItem, false);
    item.addEventListener('keypress', toggleItem, false);
  }
}

// Close submenu from anywhere in the page
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector('.submenu-active')) {
    menu.querySelector('.submenu-active').classList.remove('submenu-active');
  }
}

document.addEventListener('click', closeSubmenu, false);

// -----------------------------------------------------------------------------
// ACCORDION MEMBERS PAGE
// -----------------------------------------------------------------------------
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
