

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


  // ------------- Book: check form input, progress bar,  thanks form ------------

   var modal = document.getElementById('myModal');
    var btn = document.getElementById("sendBtn");
    var sendbtn2 = document.getElementById('btnSend2');
    var put = document.getElementsByClassName("bookForm");
    var writeDown = document.getElementsByClassName('write');


    put[0].onkeyup = function() {
      if ( put[0].value.length < 4 ) { writeDown[0].innerHTML = 'Please Write Down min. 4 letters' }
      if(put[0].value.length >= 4 ){ writeDown[0].innerHTML = '' }
    }
    put[1].onkeyup = function() {
      if ( put[1].value.length < 4 ) { writeDown[1].innerHTML = 'Please Write Down min. 4 letters' }
      if (put[1].value.length >= 4){  writeDown[1].innerHTML = '' };
    }
    put[2].onkeyup = function() {
      if ( !/...@.../.test(put[2].value)  ) { writeDown[2].innerHTML = 'Please Write Down Your Email' }; 
      if ( /...@.../.test(put[2].value ) ) { writeDown[2].innerHTML = '' }; 
    }
  
  
  btn.onclick = function() {

      if ( put[0].value.length < 4 ) { writeDown[0].innerHTML = 'Please Write Down min. 4 letters' }
      if(put[0].value.length >= 4 ){ writeDown[0].innerHTML = '' }

      if ( put[1].value.length < 4 ) { writeDown[1].innerHTML = 'Please Write Down min. 4 letters' }
      if (put[1].value.length >= 4){  writeDown[1].innerHTML = '' };

      if ( !/...@.../.test(put[2].value)  ) { writeDown[2].innerHTML = 'Please Write Down Your Email' }; 
      if ( /...@.../.test(put[2].value ) ) { writeDown[2].innerHTML = '' }; 

      if (put[0].value.length >= 4 && put[1].value.length >= 4 && /...@.../.test(put[2].value )) {
        function move() {
          var bookProgress = document.getElementById('myProgress');
          var bookBar = document.getElementById("myBar");   
          var width = 1;
          var id = setInterval(frame, 30);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              bookProgress.style.display = 'none';
              modal.style.display = "block" 
            } else {
              bookProgress.style.display = 'block';
              width++; 
              bookBar.style.width = width + '%'; 
              bookBar.innerHTML = width * 1  + '%';
            }
          }
          if ( bookProgress.style.display == 'none'){
           
          }
        }
        move()
        }
  }



// // ------------------ contact page: check form input, progress bar,  thanks form --------------------

  var wrongText = document.getElementsByClassName('wrong');
  var contactPut = document.getElementsByClassName("putForm");

  // contactPut[0].onkeyup = function() {
  //   if (contactPut[0].value.length < 4){ wrongText[0].innerHTML = 'Please Write Down min. 4 letters'};
  //   if (contactPut[0].value.length >= 4 ){ wrongText[0].innerHTML = '' };
  // }
  // contactPut[1].onkeyup = function() {
  //   if ( contactPut[1].value.length < 4 ) { wrongText[1].innerHTML = 'Please Write Down min. 4 letters' };
  //   if ( contactPut[1].value.length >= 4){  wrongText[1].innerHTML = '' };
  // }
  // contactPut[2].onkeyup = function() {
  //   if ( !/...@.../.test(contactPut[2].value)  ) { wrongText[2].innerHTML = 'Please Write Down Your Email' }; 
  //   if ( /...@.../.test(contactPut[2].value ) ) { wrongText[2].innerHTML = '' }; 
  // }

  function cntcFunction() {
    if (contactPut[0].value.length < 4){ wrongText[0].innerHTML = 'Please Write Down min. 4 letters'};
    if (contactPut[0].value.length > 4 ){ wrongText[0].innerHTML = '' };
  
    if ( contactPut[1].value.length < 4 ) { wrongText[1].innerHTML = 'Please Write Down min. 4 letters' };
    if ( contactPut[1].value.length > 4){  wrongText[1].innerHTML = '' };
  
    if ( !/...@.../.test(contactPut[2].value)  ) { wrongText[2].innerHTML = 'Please Write Down Your Email' }; 
    if ( /...@.../.test(contactPut[2].value ) ) { wrongText[2].innerHTML = '' }; 
  
    if (contactPut[0].value.length >= 4 && contactPut[1].value.length >= 4 && /...@.../.test(contactPut[2].value )){ 
  
      function move() {
        var contactProgress = document.getElementById('cntProgress');
        var contactBar = document.getElementById("cntBar");   
        var width = 1;
        var id = setInterval(frame, 30);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            contactProgress.style.display = 'none';
            contact.style.display = "block";
            modal.style.display = "block";
          } else {
            contactProgress.style.display = 'block';
            width++; 
            contactBar.style.width = width + '%'; 
            contactBar.innerHTML = width * 1  + '%';
          }
        }
      }
      move()
    }
  }




// ------------- open nav by burger ------------

var burgeri = document.querySelector(".burger");
var navbarMenu = document.getElementById('menu');

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
  writeDown[0].innerHTML = '';
  writeDown[1].innerHTML = '';
  writeDown[2].innerHTML = '';
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
  document.getElementsByTagName('textarea')[0].value = '';
  contactPut[0].value = '';
  contactPut[1].value = '';
  contactPut[2].value = '';
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




// ---------  scroll down ---------------- 
function scrollDown() {
  var x = 1;
  var st = setInterval(scrollEase, 30);
  function scrollEase(){
    if(x >= 110){
      clearInterval(st);
    } else {
      x += 10;
      window.scrollBy(0, x);
    }
  }
}




// ----------- select option car --------------

function changeFunc(){
  var selectBox = document.getElementById("selectBox").value;
  var allBmw = document.querySelectorAll('.cars > .bmw');
  var alltsl = document.querySelectorAll('.cars > .tesla');
  var noFound = document.getElementById('noFound');

  if(selectBox == 'Tesla'){
    for(let i = 0; i < allBmw.length; i++){
      alltsl[i].style.display = 'flex';
      allBmw[i].style.display = 'none';
      noFound.style.display = 'none';
    }
  }

  if(selectBox == 'BMW'){
    for(let i = 0; i < allBmw.length; i++){
      allBmw[i].style.display = 'flex';
      alltsl[i].style.display = 'none';
      noFound.style.display = 'none';
    }
  }

  if(selectBox == 'Hyundai' || selectBox == 'Mercedes-Benz' || selectBox == 'Toyota' ){
    for(let i = 0; i < allBmw.length; i++){
      alltsl[i].style.display = 'none';
      allBmw[i].style.display = 'none';
      noFound.style.display = 'block';
    }
  }
}











// start jquery 
$(document).ready(function(){

  // car design pics object
  var carDizainPics = [
    {
      active: true,
      img: 'gallery_1.png',
      id: 0
    },
    {
      active: false,
      img: 'gallery_2.png',
      id: 1
    },
    {
      active: false,
      img: 'gallery_3.png',
      id: 2
    },
    {
      active: false,
      img: 'gallery_4.png',
      id: 3
    },
    {
      active: false,
      img: 'gallery_5.jpg',
      id: 4
    },
    {
      active: false,
      img: 'gallery_1.png',
      id: 5
    },
    {
      active: false,
      img: 'gallery_2.png',
      id: 6
    },
    {
      active: false,
      img: 'gallery_3.png',
      id: 7
    },
    {
      active: false,
      img: 'gallery_4.png',
      id: 8
    },
    {
      active: false,
      img: 'gallery_5.jpg',
      id: 9
    },
  ];

// dynamically car design img in html
  function imgDizain(){
    for(let i = 0; i < carDizainPics.length; i++ ){ 
    var cardynamicimg = $(`<img class="lazy ${carDizainPics[i].active ? 'active' : ''} "src="assets/media/img/${carDizainPics[i].img}" data-id="${carDizainPics[i].id}" alt="tesla" title="Tesla">`)
    $('figure').append(cardynamicimg)}
  }
  imgDizain()

// slider car design pic
  var currentleft = 0;

  // go left
    $('.arrow1 .prev').on('click', function(){
      if(currentleft >= 0){
        $('.sliderContent').css('left', '0px');
        return
      }
      currentleft += 133;
     $('.sliderContent').css('left', currentleft + 'px');
    });
  
// go right
  $('.arrow1 .next').on('click', function(){
    if(currentleft <= -2375) {
      $('.sliderContent').css('left', '-2375px');
     return
    }
    currentleft -= 133;
    $('.sliderContent').css('left', currentleft  + 'px');
  });

// remove and add active class on click 
  $('.sliderContent img').on('click', function(){
    // var currentIdPosition = $('.active').data('id');
    // var newIdPosition = $(this).data('id');
   
    // if(currentIdPosition < newIdPosition){
    //  currentleft -= 260
    // }
    // if(currentIdPosition > newIdPosition){
    //   currentleft += 260
    //  }
    // $('.sliderContent').css('left', currentleft + 'px' );

    $('.sliderContent img').removeClass('active');
    $(this).addClass('active')
  });



  

// end jquery
});








  