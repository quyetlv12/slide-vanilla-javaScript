const btn_next = document.querySelector('.btn__next')
const btn_pre = document.querySelector('.btn__pre')
const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
];
let currentIndex = 0;


const renderSlides = () => {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = '';
    slides.forEach((slide, index) => {
        // if (!checkIsImageUrl(slide)) {
        //     const img = document.createElement('img');
        //     img.src = slide;
        //     img.alt = `Slide ${index + 1}`;
        //     slidesContainer.appendChild(img);
        // }else{
           
        // }
        const span = document.createElement('span');
        span.innerHTML = slide;
        span.alt = `Slide ${index + 1}`;
        slidesContainer.appendChild(span);
      
        
    });
    showSlide(currentIndex);
}

const showSlide = (index) => {
    if (index === 0) {
        btn_pre.disabled = true
    }
    if (index === slides.length - 1) {
        btn_next.disabled = true
    }
    const slideImages = document.querySelectorAll('.slides span');
    if (index < 0) {
        currentIndex = slideImages.length - 1;
    } else if (index >= slideImages.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slideImages.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    slideImages.forEach((slide) => {
        const slideWidth = slides[0].clientWidth;
        const offset = -index * slideWidth;
        slide.style.transform = `translateX(${offset}px)`;
        slide.classList.remove('slideInRight' , 'slideInLeft');
    });
}

//prev 
const previousSlide = () => {
    const slideImages = document.querySelectorAll('.slides span');
    let _curent_slide = currentIndex
    btn_next.disabled = false
    _curent_slide = Math.max(_curent_slide - 1, 0);
    slideImages[_curent_slide].style.animation = 'slideInLeft 0.2s forwards';
    showSlide(_curent_slide);
}

//next slide
const nextSlide = () => {
    const slideImages = document.querySelectorAll('.slides span');
    let _curent_slide = currentIndex
    btn_pre.disabled = false
    _curent_slide = Math.min(currentIndex + 1, slides.length - 1);
    slideImages[_curent_slide].style.animation = 'slideInRight 0.2s forwards';
    showSlide(_curent_slide);
}



document.addEventListener('DOMContentLoaded', renderSlides);
