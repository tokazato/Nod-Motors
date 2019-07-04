
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
    contact.style.display = 'flex';
  }

  // ------------- X on-Book ------------

  // bookbtn.addEventListener("click", function(){
  //   this.classList.toggle("added");
  //   if(this.classList.contains("added")){
  //     this.textContent = "X";
  //   } else {
  //     this.textContent = "Book"
  //   }
  // })


  // ------------- Thank form after book ------------

  var modal = document.getElementById('myModal');
  var btn = document.getElementById("sendBtn");
  var put = document.getElementsByTagName('input');
  var sheavse = document.getElementsByClassName('write');
  
  
  btn.onclick = function() {

    
   
      if ( put[0].value.length < 4 ) { sheavse[0].innerHTML = 'Please Write Down min. 4 letters' }
      if(put[0].value.length > 4 ){ sheavse[0].innerHTML = '' }

      if ( put[1].value.length < 4 ) { sheavse[1].innerHTML = 'Please Write Down min. 4 letters' }
      if (put[1].value.length > 4){  sheavse[1].innerHTML = ''; }

      if ( !/...@.../.test(put[2].value)  ) { sheavse[2].innerHTML = 'Please Write Down Your Email' }; 
      if ( /...@.../.test(put[2].value ) ) { sheavse[2].innerHTML = '' }; 

     
     

      if (put[0].value.length > 4 && put[1].value.length > 4 && /...@.../.test(put[2].value )) { modal.style.display = "block" }
    
      // var patt = /..@../;
      // var xaxaxa = patt.test();
  }


// ------------- open nav by burger ------------

const burgeri = document.querySelector(".burger");
const navbarMenu = document.getElementById('menu');

burgeri.addEventListener("click", burgerClick);

function burgerClick() {
  navbarMenu.classList.toggle("open");
}


// ------------- Close  Contact Form and input field, input p innerHTML -----------
function contactHide()  {
  contact.style.display = "none" ;
  put[0].value = '';
  put[1].value = '';
  put[2].value = '';
  sheavse[0].innerHTML = '';
  sheavse[1].innerHTML = '';
  sheavse[2].innerHTML = '';
  document.getElementsByTagName('textarea')[0].value = '';
}

// ------------- X on-burger ------------

function myFunction(x) {
 x.classList.toggle("change");
}

// ------------- hide to thanks form by X and input field  ------------

const hide = document.querySelector(".close");

hide.onclick = function() {
  modal.style.display = "none" ;
  contact.style.display = "none" ;
  put[0].value = '';
  put[1].value = '';
  put[2].value = '';
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




//  --------------------   Slider  Change main pic  -------------
var slideIndex = 1;           
change(slideIndex);

function carChange(f){
  change(slideIndex += f);
}

function change(f){
  var slides = document.getElementsByClassName('main_pic');

  if (f > slides.length){ slideIndex = 1 }
  if (f < 1) {slideIndex = slides.length}

  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}



// --------------- page 2 main pic change color  -----------
var White = document.getElementById('whiteCar');
var Gray =  document.getElementById('grayCar');

function addGray(){
  Gray.style.display = 'block';
  White.style.display = 'none';
}
function addWhite(){
  White.style.display = 'block';
  Gray.style.display = 'none';
}




// --------- show next section of car --------- 
let bmwHide1 = document.getElementById('bmwHide1');
let bmwHide2 = document.getElementById('bmwHide2')
let bmwHide3 = document.getElementById('bmwHide3')

let teslaHide1 = document.getElementById('teslaHide1');
let teslaHide2 = document.getElementById('teslaHide2')
let teslaHide3 = document.getElementById('teslaHide3')

function appearBMW(){
  bmwHide1.style.display = 'flex';
  bmwHide2.style.display = 'flex';
  bmwHide3.style.display = 'flex';
  
  teslaHide1.style.display = 'none';
  teslaHide2.style.display = 'none';
  teslaHide3.style.display = 'none';
}

function appearTesla(){
  bmwHide1.style.display = 'none';
  bmwHide2.style.display = 'none';
  bmwHide3.style.display = 'none';
  
  teslaHide1.style.display = 'flex';
  teslaHide2.style.display = 'flex';
  teslaHide3.style.display = 'flex';
}





// ------------------ slider change image mobile version ----------------
// var slideIndex = 1;   // slideIndex aris gamodzaxebuli zevit 
slg(slideIndex);

function changeImage(f){
  slg(slideIndex += f);
}

function slg(f){
  var popo = document.getElementsByClassName('sliderCar');

  if (f > popo.length){ slideIndex = 1 }
  if (f < 1) {slideIndex = popo.length}

  for(let i = 0; i < popo.length; i++){
    popo[i].style.display = 'none';
  }

  popo[slideIndex - 1].style.display = 'flex';  
}