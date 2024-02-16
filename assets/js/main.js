let slides = document.querySelectorAll('.slides div');
let slideCountItem = slides.length;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let currentIndex = 0;

for (let index = 0; index < slides.length; index++) {
    const element = slides[index];

    element.style.transform = "translateX(" + 100 * (index) + "%)";
}
let loop = 0 + 1000 * slideCountItem;

const checkButtonPrevAndNextDisabled = (index = 0) => {
    if (index === 0) {
        prev.disabled = true
    }
    if (index === slides.length - 1) {
        next.disabled = true
    }
}
//next slide
function goNextSlide() {
    loop++;
    let _curent_slide = currentIndex
    prev.disabled = false
    _curent_slide = Math.max(_curent_slide + 1, 0);
    checkButtonPrevAndNextDisabled(_curent_slide)
    currentIndex = _curent_slide
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - loop % slideCountItem) + "%)";
    }

}
//previous slide
function goPrevSlide() {
    loop--;
    let _curent_slide = currentIndex
    next.disabled = false
    _curent_slide = Math.max(_curent_slide - 1, 0);
    checkButtonPrevAndNextDisabled(_curent_slide)
    currentIndex = _curent_slide
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - loop % slideCountItem) + "%)";
    }
}
// load check button when load page
document.addEventListener('DOMContentLoaded', checkButtonPrevAndNextDisabled(currentIndex));


