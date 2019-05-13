
// ------------- lazy load ------------

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
    }
  });

// ------------- book ------------

  // var contact = document.getElementById('contact_form');
  // var bookbtn = document.getElementById("book");

  // bookbtn.onclick = function() {
  //   contact.style.display = "block";
  // }

  const contact = document.getElementById("contact_form");
  const bookbtn = document.getElementById("book")

  bookbtn.addEventListener("click", bookClick);

  function bookClick() {
    contact.classList.toggle("opencontact");
  }

  // ------------- X on-Book ------------

  bookbtn.addEventListener("click", function(){
    this.classList.toggle("added");
    if(this.classList.contains("added")){
      this.textContent = "X";
    } else {
      this.textContent = "Book"
    }
  })


  // ------------- Thank form after book ------------

  var modal = document.getElementById('myModal');
  var btn = document.getElementById("sendBtn");
  
  btn.onclick = function() {
    modal.style.display = "block";
  }


// ------------- open nav by burger ------------

const burgeri = document.querySelector(".burger");
const navbarMenu = document.getElementById('menu');

burgeri.addEventListener("click", burgerClick);

function burgerClick() {
  navbarMenu.classList.toggle("open");
}


// ------------- X on-burger ------------

function myFunction(x) {
 x.classList.toggle("change");
}

// ------------- hide to thanks form by X   ------------

const hide = document.querySelector(".close");

hide.onclick = function() {
  modal.style.display = "none" ;
}


// ------------- scroll up ------------

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if(window.pageYOffset > 300) { //show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")){
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { //hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")){
        backToTopButton.classList.remove("btnEntrance");
       backToTopButton.classList.add("btnExit");
   setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};

