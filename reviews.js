// отримуємо елементи
const reviewForm = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviews");

// функція рендеру відгуків
function renderReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviewsContainer.innerHTML = "";
    reviews.forEach((review) => {
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = `
            <div class="card shadow-sm h-100">
                <div class="card-body">
                    <h5 class="card-title">${review.name}</h5>
                    <p class="card-text">${review.text}</p>
                    <div class="text-warning fw-bold fs-5">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
                </div>
            </div>
        `;
        reviewsContainer.appendChild(div);
    });
}

// обробник форми
reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const text = document.getElementById("text").value.trim();
    const rating = parseInt(document.getElementById("rating").value);

    if (!name || !text) return;

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ name, text, rating });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    reviewForm.reset();
    renderReviews();
});

// показати відгуки при завантаженні сторінки
renderReviews();