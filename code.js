const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  var element = document.getElementById("animate");
  element.classList.add("conic");
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  let dots = document.getElementsByClassName("dot");
  console.log("dot total",slides);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let sliderIndex = 0;
const slidesToShow = 3;
const slides = document.querySelectorAll(".slide");
console.log("slides total",slides);
const slidesWrapper = document.querySelector(".slides");

const slideWidth = slidesWrapper.offsetWidth;
const slidesContainer = document.querySelector(".slides");
console.log("slides wrapper",slidesContainer);
const totalSlides = slides.length;

function changeSlide(n) {
    sliderIndex += n;
    if (sliderIndex >= totalSlides) {
      sliderIndex = 0;
    } else if (sliderIndex < 0) {
      sliderIndex = totalSlides - 1;
    }
  
    if (sliderIndex + slidesToShow >= totalSlides) {
      slidesContainer.style.transform = `translateX(-${
        ((sliderIndex + slidesToShow - totalSlides) * slideWidth) / 3 //calculating how much to scroll at once
      }px)`;
      console.log(sliderIndex);
    } else {
      slidesContainer.style.transform = `translateX(-${(sliderIndex * slideWidth) / 3}px)`;
      console.log(slidesToShow);
    }
  
    slides.forEach(
        (slide) => {
            slide.classList.remove("active")
            slide.classList.remove("left-slide-rotate")
            slide.classList.remove("right-slide-rotate")
            slide.classList.remove("left-most-slide-rotate")
            slide.classList.remove("right-most-slide-rotate")
        }
    )   
    const middleSlideIndex = sliderIndex + Math.ceil(slidesToShow / 2);
  
    
    slides[middleSlideIndex].classList.add("active");
    slides[middleSlideIndex - 1].classList.add("left-slide-rotate");
    slides[middleSlideIndex + 1].classList.add("right-slide-rotate");
    slides[middleSlideIndex - 2].classList.add("left-most-slide-rotate");
    slides[middleSlideIndex + 2].classList.add("right-most-slide-rotate");
  }

  // Show the first set of slides initially
slides[2].classList.add("active");
slides[1].classList.add("left-slide-rotate");
slides[3].classList.add("right-slide-rotate");
changeSlide(0);