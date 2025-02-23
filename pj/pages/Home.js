document.addEventListener("DOMContentLoaded", function () {
    // Toggle hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
// cards
const dishes = [
    { img: "../../img/10 Schinken Salami Pilze.png", name: "10 Schinken Salami Pilze", desc: "Turkey Ham Beef Salami Mushrooms" },
    { img: "../../img/11 Pizza David.png", name: "11 Pizza David", desc: "Beef Salami Champions Hot Peppers Artichokes Olives" },
    { img: "../../img/18 Hawaii.png", name: "18 Hawaii", desc: "Turkey Ham Pineapple" },
    { img: "../../img/36 Bbq Chicken.png", name: "36 Bbq Chicken", desc: "Chicken Onion BBQ Sauce" },
    { img: "../../img/58 Al Forno.jpg", name: "58 Al Forno", desc: "Ground beef sauce, cream sauce, baked" },
    { img: "../../img/82 Chicken Masala.jpg", name: "82 Chicken Masala", desc: "Chicken with peppers, garlic and hot peppers" },
    { img: "../../img/105 Cheeseburger.png", name: "105 Cheeseburger", desc: "Beef (100g) with melted cheese, lettuce, cucumber, onions, tomatoes and sauce" },
    { img: "../../img/111 Samosa 5 Pieces.jpg", name: "111 Samosa 5 Pieces", desc: "5 Pieces with Dipp Sauce" }
];

const cardContainer = document.getElementById("cardContainer");

dishes.forEach(dish => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${dish.img}" alt="${dish.name}">
        <h3>${dish.name}</h3>
        <p>${dish.desc}</p>
    `;

    cardContainer.appendChild(card);
});
// timing
const deliveryHours = {
    1: [{ start: "10:30", end: "13:45" }, { start: "17:00", end: "22:45" }], 
    2: [{ start: "10:30", end: "13:45" }, { start: "17:00", end: "22:45" }], 
    3: [{ start: "10:30", end: "13:45" }, { start: "17:00", end: "22:45" }], 
    4: [{ start: "10:30", end: "13:45" }, { start: "17:00", end: "22:45" }], 
    5: [{ start: "10:00", end: "13:45" }, { start: "17:00", end: "22:30" }], 
    6: [{ start: "10:30", end: "13:45" }, { start: "16:30", end: "22:45" }], 
    0: [{ start: "11:00", end: "22:30" }]
};

function isDeliveryAvailable() {
    const now = new Date();
    const day = now.getDay();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    let available = false;
    const todaySlots = deliveryHours[day] || [];
    
    todaySlots.forEach(slot => {
        const [startH, startM] = slot.start.split(":").map(Number);
        const [endH, endM] = slot.end.split(":").map(Number);
        const startTime = startH * 60 + startM;
        const endTime = endH * 60 + endM;

        if (currentTime >= startTime && currentTime <= endTime) {
            available = true;
        }
    });

    document.getElementById("delivery-status").innerText = available 
        ? "✅ Delivery is currently available!" 
        : "❌ Delivery is currently unavailable";
}

function displayDeliveryTimes() {
    const container = document.getElementById("delivery-times");
    container.innerHTML = "";

    Object.entries(deliveryHours).forEach(([day, slots]) => {
        const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];

        const timeItem = document.createElement("div");
        timeItem.classList.add("delivery-time-item");

        const dayElement = document.createElement("span");
        dayElement.textContent = dayName;

        const timeElement = document.createElement("span");
        timeElement.textContent = slots.map(slot => `${slot.start} - ${slot.end}`).join(" | ");
        timeElement.classList.add("delivery-time-text");

        timeItem.appendChild(dayElement);
        timeItem.appendChild(timeElement);
        container.appendChild(timeItem);
    });

    isDeliveryAvailable();
}

// Run on page load
displayDeliveryTimes();
