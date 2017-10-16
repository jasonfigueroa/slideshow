// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");

//     if (n > slides.length) {
//         slideIndex = 1
//     } 
    
//     if (n < 1) {
//         slideIndex = slides.length
//     }
    
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }    
    
//     slides[slideIndex-1].style.display = "block"; 
//     dots[slideIndex-1].className += " active";
// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
    
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex++;
    
//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
    
//     slides[slideIndex-1].style.display = "block"; 
//     setTimeout(showSlides, 4000); // Change image every 3 seconds
// }

let slideIndex = -1;

let slides = ["landscape-1.jpeg", "landscape-2.jpg", "landscape-3.jpg", "landscape-4.jpeg"];

let slideDiv = document.getElementsByClassName('bg')[0];

slideSlides();

function slideSlides() {
    slideIndex++;

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }

    // slideDiv.fadeOut('slow');
    slideDiv.style.backgroundImage = "url('img/" + slides[slideIndex] + "')";
    // slideDiv.fadeIn('slow');
    setTimeout(slideSlides, 4000);
}