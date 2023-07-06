function openLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "block";
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.addEventListener("click", openLightbox);
  
    var lightbox = document.getElementById("lightbox");
    lightbox.addEventListener("click", closeLightbox);
  });
  

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });


function getBrands(){
  const brands = []
  
  //loop through brands folder
    //for every item -> 
    //validate...
    //add it to the brands array 
  
  //loop through brands
    //add brand to slider
} 
