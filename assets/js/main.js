const btn_next = document.querySelector('.btn__next')
const btn_pre = document.querySelector('.btn__pre')
const slides = [
    { type: 'image', content: 'https://example.com/image1.jpg' },
    { type: 'text', content: 'Slide 2: This is some text content.' },
    { type: 'image', content: 'https://example.com/image3.jpg' },
];
let currentIndex = 0;


const renderSlides = () => {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = '';

    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');

        if (slide.type === 'image') {
            const img = document.createElement('img');
            img.src = slide.content;
            img.alt = `Slide ${index + 1}`;
            slideElement.appendChild(img);
        } else if (slide.type === 'text') {
            const span = document.createElement('span');
            span.textContent = slide.content;
            slideElement.appendChild(span);
        }

        slidesContainer.appendChild(slideElement);
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
        slide.classList.remove('slideInRight', 'slideInLeft');
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
