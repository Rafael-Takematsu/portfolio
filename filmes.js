let slideIndex = 0;
const bgImages = [
    'url(images/gotg-bg.webp)',
    'url(images/lotr-bg.jpg)',
    'url(images/starwars-bg.jpg)'
];

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("trilogia");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    if (bgImages[slideIndex - 1]) {
        slides[slideIndex - 1].style.backgroundImage = bgImages[slideIndex - 1];
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 4000);
}