document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".review-card").forEach((card) => {
        let filledStars = card.querySelectorAll(".review-stars .filled").length;
        let ratingTextDiv = card.querySelector(".rating-text");

        if (ratingTextDiv) { // Ensure the div exists
            if (filledStars === 0) {
                ratingTextDiv.textContent = "Not Rated";
            } else {
                ratingTextDiv.textContent = `${filledStars} Star${filledStars > 1 ? "s" : ""}`;
            }
        }
    });
});
