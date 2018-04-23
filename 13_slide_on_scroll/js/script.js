
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document .querySelectorAll('.slide-in')

function checkSlide(e){
  console.log(window.scrollY);
  sliderImages.forEach(slideImage => {
    const slideInAt = (window.scrollY +  window.innerHeight) - slideImage.height / 2;
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast){
      slideImage.classList.add('active')
    } 
    //else {
    // Not a huge fan of this on
    // slideImage.classList.remove('active')
    //}
  });
}

window.addEventListener('scroll', debounce(checkSlide, 10)); // donc =>  wait = 10
