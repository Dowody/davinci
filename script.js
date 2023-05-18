// PRELOAD
setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 600);

setTimeout(function(){
  $('.loader_bgg').fadeToggle();
}, 600);



// HEADER HAMB
$('.hamburger').click(function(){
    $(this).toggleClass("is-active");
});



// LANGUAGE CHANGER
$(".select-btn").removeClass("active");
$(".options").removeClass("active");

$(".select-btn").on("click",function(){
    $(".select-btn").toggleClass("active");
    $(".content").toggleClass("active");
})

// HOME ARROW DISSAPEAR ON SCROLL
const arrow = document.querySelector(".home-arrow");
let arrowDissapear = 100;

window.addEventListener("scroll", () => {
    if (window.scrollY >= arrowDissapear)
    {
        arrow.style.visibility = "hidden";
    } 
    else
    {
        arrow.style.visibility = "visible";
    }

    lastScrollY = window.scrollY;
});



// CUSTOM CURSOR

new kursor ({
    type: 4,
    removeDefaultCursor: true,
    color: '#171717',
});




// RESULT NUMBER COUNTER UP
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});


// HAMB MENU DISSAPEAR ON SCROLL
window.addEventListener("scroll", () => {
    document.getElementById("side-menu").checked = false;
});

// HAMB MENU DISSAPEAR ON X BUTTON
const xbutton = document.querySelector(".xbutton");
const closeButton = document.querySelector(".tint");



xbutton.addEventListener("click", () => {
    document.getElementById("side-menu").checked = false;
});
closeButton.addEventListener("click", () => {
  document.getElementById("side-menu").checked = false;
});




// IMAGES REVEAL
window.addEventListener('scroll', reveal);

function reveal()
{
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++)
    {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealTop < windowheight - revealpoint)
        {
            reveals[i].classList.add("active");
        }
        else
        {
            reveals[i].classList.remove("active");
        }
    }
}

// HOME BUTTON APPEAR
const btn = document.querySelector(".home-btn");
let btnAppear = 400;

window.addEventListener("scroll", () => {
    if (window.scrollY <= btnAppear)
    {
        btn.classList.remove("active");
    } 
    else
    {
        btn.classList.add("active");
    }

    lastScrollY = window.scrollY;
});

// CONTENT IMAGE SLIDER
{
  class SliderClip {
    constructor(el) {
      this.el = el;
      this.Slides = Array.from(this.el.querySelectorAll('.slider li'));
      this.totalSlides = this.Slides.length;

      this.Nav = Array.from(this.el.querySelectorAll('.imgnav a'));
      this.current = 0;
      this.autoPlay = true; //true or false
      this.timeTrans = 5000; //transition time in milliseconds
      this.IndexElements = [];
      
      for(let i=0;i<this.totalSlides;i++) {
        this.IndexElements.push(i);
      }

      this.setCurret();
      this.initEvents();
    }
    setCurret() {
      this.Slides[this.current].classList.add('current');
      this.Nav[this.current].classList.add('current_dot');
    }
    initEvents() {
      const self = this;

      this.Nav.forEach((dot) => {
        dot.addEventListener('click', (ele) => {
          ele.preventDefault();
          this.changeSlide(this.Nav.indexOf(dot));
        })
      })

      this.el.addEventListener('mouseenter', () => self.autoPlay = false);
      this.el.addEventListener('mouseleave', () => self.autoPlay = true);

      setInterval(function() {
        if (self.autoPlay) {
          self.current = self.current < self.Slides.length-1 ? self.current + 1 : 0;
          self.changeSlide(self.current);
        }
      }, this.timeTrans);

    }
    changeSlide(index) {

      this.Nav.forEach((allDot) => allDot.classList.remove('current_dot'));

      this.Slides.forEach((allSlides) => allSlides.classList.remove('prev', 'current'));

      const getAllPrev = value => value < index;

      const prevElements = this.IndexElements.filter(getAllPrev);

      prevElements.forEach((indexPrevEle) => this.Slides[indexPrevEle].classList.add('prev'));

      this.Slides[index].classList.add('current');
      this.Nav[index].classList.add('current_dot');
    }
}

const slider1 = new SliderClip(document.querySelector(".etapa1 .slider1"));
const slider2 = new SliderClip(document.querySelector(".etapa1 .slider2"));
const slider3 = new SliderClip(document.querySelector(".etapa1 .slider3"));
const slider4 = new SliderClip(document.querySelector(".etapa1 .slider4"));
const slider5 = new SliderClip(document.querySelector(".etapa1 .slider5"));
const slider6 = new SliderClip(document.querySelector(".etapa1 .slider6"));
const slider7 = new SliderClip(document.querySelector(".etapa1 .slider7"));
const slider8 = new SliderClip(document.querySelector(".etapa1 .slider8"));
const slider9 = new SliderClip(document.querySelector(".etapa1 .slider9"));
const slider10 = new SliderClip(document.querySelector(".etapa1 .slider10"));
const slider11 = new SliderClip(document.querySelector(".etapa1 .slider11"));
const slider12 = new SliderClip(document.querySelector(".etapa1 .slider12"));
const slider13 = new SliderClip(document.querySelector(".etapa1 .slider13"));
const slider14 = new SliderClip(document.querySelector(".etapa1 .slider14"));
const slider15 = new SliderClip(document.querySelector(".etapa1 .slider15"));
const slider16 = new SliderClip(document.querySelector(".etapa1 .slider16"));




};



// LANGUAGE CHANGE
// URL NAME CHANGE

 
