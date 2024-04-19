// JavaScript function to toggle the navigation menu

var highlightingEnabled = false; // Track whether highlighting is enabled

function enableHighlighting() {
    highlightingEnabled = true;
    addHighlightingListeners();
  }

  function disableHighlighting() {
    highlightingEnabled = false;
    removeHighlightingListeners();
  }


  function addHighlightingListeners() {
    document
      .querySelectorAll("p, h1, h2, h3, h4, h5, h6, a")
      .forEach(function (element) {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
  }

  function removeHighlightingListeners() {
    document
      .querySelectorAll("p, h1, h2, h3, h4, h5, h6, a")
      .forEach(function (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
  }


  // Event handler function for mouseenter
  function handleMouseEnter() {
    this.classList.add("text-highlighted");
  }

  // Event handler function for mouseleave
  function handleMouseLeave() {
    this.classList.remove("text-highlighted");
  }


  

  var accessibilityEnabled = false;
function toggleAccessibility() {
    accessibilityEnabled = !accessibilityEnabled;
    var navbar = document.querySelector('.navbar'); 
    
    if (accessibilityEnabled) {
      navbar.classList.add('accessibility-on');
    } else {
      navbar.classList.remove('accessibility-on');
    }
}



function openNavbar() {
const navMenu = document.getElementById("nav-menu");
navMenu.classList.toggle("active");
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

