document.addEventListener("DOMContentLoaded", function () {
    // Toggle dropdown for login/register
    const userIcon = document.querySelector(".user-icon");
    const userDropdown = document.querySelector(".user-dropdown");
    
    userIcon.addEventListener("mouseenter", () => {
        userDropdown.style.display = "block";
    });
    
    userDropdown.addEventListener("mouseenter", () => {
        userDropdown.style.display = "block";
    });
    userIcon.addEventListener("mouseleave", () => {
        userDropdown.style.display = "none";
    });
    userDropdown.addEventListener("mouseleave", () => {
        userDropdown.style.display = "none";
    });
    // Toggle dropdown for language selection
    const langIcon = document.querySelector(".lang-icon");
    const langDropdown = document.querySelector(".lang-dropdown");
    
    langIcon.addEventListener("mouseenter", () => {
        langDropdown.style.display = "block";
    });
    langDropdown.addEventListener("mouseenter", () => {
        langDropdown.style.display = "block";
    });
    langDropdown.addEventListener("mouseleave", () => {
        langDropdown.style.display = "none";
    });
    langIcon.addEventListener("mouseleave", () => {
        langDropdown.style.display = "none";
    });
    // Toggle hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// Slideshow

document.addEventListener("DOMContentLoaded", function () {
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

showSlides(); // Show first slide
setInterval(showSlides, 3000);

function checkDeliveryTime() {
    let now = new Date();
    let day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let currentTime = hours * 60 + minutes; // Convert time to minutes

    let deliveryTimes = {
        1: [[630, 825], [1020, 1365]], // Monday
        2: [[630, 825], [1020, 1365]], // Tuesday
        3: [[630, 825], [1020, 1365]], // Wednesday
        4: [[630, 825], [1020, 1365]], // Thursday
        5: [[660, 825], [990, 1350]],  // Friday
        6: [[660, 1350]],             // Saturday
        0: [[660, 1350]]              // Sunday
    };

    let isAvailable = false;
    if (deliveryTimes[day]) {
        deliveryTimes[day].forEach(([start, end]) => {
            if (currentTime >= start && currentTime <= end) {
                isAvailable = true;
            }
        });
    }

    let deliveryStatus = document.getElementById("delivery-status");
    deliveryStatus.style.display = isAvailable ? "block" : "none";
}

checkDeliveryTime();
});
document.addEventListener("DOMContentLoaded", function () {
const days = document.querySelectorAll(".schedule-list li");
const todayIndex = new Date().getDay(); // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

// Adjust index because our list starts from Monday (not Sunday)
const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

// Remove existing active-day class (if any) and set the current day
days.forEach((day, index) => {
day.classList.remove("active-day"); // Ensure no duplicate highlight
if (index === adjustedIndex) {
    day.classList.add("active-day"); // Highlight the correct day
}
});
});
// from the menu
document.addEventListener("DOMContentLoaded", function () {
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let cardsData = [
{ img: "../../img/10 Schinken Salami Pilze.png", name: "10 Schinken Salami Pilze", desc: "Turkey Ham Beef Salami Mushrooms" },
{ img: "../../img/11 Pizza David.png", name: "11 Pizza David", desc: "Beef Salami Champions Hot Peppers Artichokes Olives" },
{ img: "../../img/18 Hawaii.png", name: "18 Hawaii", desc: "Turkey Ham Pineapple" },
{ img: "../../img/36 Bbq Chicken.png", name: "36 Bbq Chicken", desc: "Chicken Onion BBQ Sauce" },
{ img: "../../img/58 Al Forno.jpg", name: "58 Al Forno", desc: "Ground beef sauce, cream sauce, baked" },
{ img: "../../img/82 Chicken Masala.jpg", name: "82 Chicken Masala", desc: "Chicken with peppers, garlic and hot peppers" },
{ img: "../../img/105 Cheeseburger.png", name: "105 Cheeseburger", desc: "Beef (100g) with melted cheese, lettuce, cucumber, onions, tomatoes and sauce" },
{ img: "../../img/111 Samosa 5 Pieces.jpg", name: "111 Samosa 5 Pieces", desc: "5 Pieces with Dipp Sauce" }
];

// Duplicate cards for infinite effect
let extendedCards = [...cardsData, ...cardsData, ...cardsData];

function createCards() {
track.innerHTML = "";
extendedCards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <img src="${card.img}" alt="${card.name}">
        <p>${card.name}</p>
        <p>${card.desc}</p>
    `;
    track.appendChild(cardElement);
});
}

createCards();

let currentIndex = cardsData.length; // Start in the middle to create an infinite effect
const cardWidth = document.querySelector(".card").offsetWidth + 20;

function moveToNext() {
if (currentIndex >= extendedCards.length - cardsData.length) {
    track.style.transition = "none";
    currentIndex = cardsData.length;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
setTimeout(() => {
    track.style.transition = "transform 0.5s ease-in-out";
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}, 10);
}

function moveToPrev() {
if (currentIndex <= cardsData.length) {
    track.style.transition = "none";
    currentIndex = extendedCards.length - (cardsData.length * 2);
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
setTimeout(() => {
    track.style.transition = "transform 0.5s ease-in-out";
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}, 10);
}

nextBtn.addEventListener("click", moveToNext);
prevBtn.addEventListener("click", moveToPrev);

// Auto-slide every 5 seconds
setInterval(moveToNext, 5000);

// Swipe functionality for mobile
let startX, endX;

track.addEventListener("touchstart", (e) => {
startX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
endX = e.changedTouches[0].clientX;
if (startX > endX + 50) {
    moveToNext();
} else if (startX < endX - 50) {
    moveToPrev();
}
});
});
document.addEventListener("DOMContentLoaded", function () {
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let cardsData = [
{ img: "../../img/10 Schinken Salami Pilze.png", name: "10 Schinken Salami Pilze", desc: "Turkey Ham Beef Salami Mushrooms" },
{ img: "../../img/11 Pizza David.png", name: "11 Pizza David", desc: "Beef Salami Champions Hot Peppers Artichokes Olives" },
{ img: "../../img/18 Hawaii.png", name: "18 Hawaii", desc: "Turkey Ham Pineapple" },
{ img: "../../img/36 Bbq Chicken.png", name: "36 Bbq Chicken", desc: "Chicken Onion BBQ Sauce" },
{ img: "../../img/58 Al Forno.jpg", name: "58 Al Forno", desc: "Ground beef sauce, cream sauce, baked" },
{ img: "../../img/82 Chicken Masala.jpg", name: "82 Chicken Masala", desc: "Chicken with peppers, garlic and hot peppers" },
{ img: "../../img/105 Cheeseburger.png", name: "105 Cheeseburger", desc: "Beef (100g) with melted cheese, lettuce, cucumber, onions, tomatoes and sauce" },
{ img: "../../img/111 Samosa 5 Pieces.jpg", name: "111 Samosa 5 Pieces", desc: "5 Pieces with Dipp Sauce" }
];

// Duplicate for infinite loop effect
let extendedCards = [...cardsData, ...cardsData, ...cardsData];

function createCards() {
track.innerHTML = "";
extendedCards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <img src="${card.img}" alt="${card.name}">
        <p>${card.name}</p>
        <p>${card.desc}</p>
    `;
    track.appendChild(cardElement);
});
}

createCards();

let currentIndex = cardsData.length; // Start in the middle
const cardWidth = document.querySelector(".card").offsetWidth + 20;

function moveToNext() {
if (currentIndex >= extendedCards.length - cardsData.length) {
    track.style.transition = "none";
    currentIndex = cardsData.length;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
setTimeout(() => {
    track.style.transition = "transform 0.5s ease-in-out";
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}, 10);
}

function moveToPrev() {
if (currentIndex <= cardsData.length) {
    track.style.transition = "none";
    currentIndex = extendedCards.length - (cardsData.length * 2);
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
setTimeout(() => {
    track.style.transition = "transform 0.5s ease-in-out";
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}, 10);
}

nextBtn.addEventListener("click", moveToNext);
prevBtn.addEventListener("click", moveToPrev);

// Auto-slide every 3 seconds
setInterval(moveToNext, 3000);

// Swipe functionality for mobile
let startX, endX;

track.addEventListener("touchstart", (e) => {
startX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
endX = e.changedTouches[0].clientX;
if (startX > endX + 50) {
    moveToNext();
} else if (startX < endX - 50) {
    moveToPrev();
}
});
});
document.addEventListener("DOMContentLoaded", function () {
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Select all images in the left container
document.querySelectorAll(".image-container img").forEach(img => {
img.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
});
});

// Close the modal when clicking the close button
closeModal.addEventListener("click", function () {
modal.style.display = "none";
});

// Close the modal when clicking outside the image
modal.addEventListener("click", function (event) {
if (event.target === modal) {
    modal.style.display = "none";
}
});
});
