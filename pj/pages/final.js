document.addEventListener("DOMContentLoaded", function () {
    const navbarItems = document.querySelectorAll(".menu-info-navbar ul li[data-target]");
    const cards = document.querySelectorAll(".cards-container > div");

    navbarItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");

            cards.forEach(card => {
                if (card.id === targetId) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
});
