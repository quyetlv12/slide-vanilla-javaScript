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
    "https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg",
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
        slide.style.transition = 'transform 0.7s ease';
        slide.classList.remove('slideInRight' , 'slideInLeft');
    });
}

//prev 
const previousSlide = () => {
    const slideImages = document.querySelectorAll('.slides span');
    let _curent_slide = currentIndex
    btn_next.disabled = false
    _curent_slide--
    slideImages[_curent_slide].style.animation = 'slideInLeft 0.2s forwards';
    showSlide(_curent_slide);
}

//next slide
const nextSlide = () => {
    const slideImages = document.querySelectorAll('.slides span');
    let _curent_slide = currentIndex
    btn_pre.disabled = false
    _curent_slide++
    slideImages[_curent_slide].style.animation = 'slideInRight 0.2s forwards';
    showSlide(_curent_slide);
}



document.addEventListener('DOMContentLoaded', renderSlides);
