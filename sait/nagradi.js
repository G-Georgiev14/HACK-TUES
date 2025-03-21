// Зареждане на точките от localStorage
let points = parseInt(localStorage.getItem("userPoints")) || 0;
document.getElementById("pointsDisplay").textContent = points;

// Функция за покупка на оферта
function buyOffer(cost) {
    if (points >= cost) {
        points -= cost;
        document.getElementById("pointsDisplay").textContent = points;
        localStorage.setItem("userPoints", points); // Запазване на новите точки
        document.getElementById("message").textContent = "Успешна покупка!";
    } else {
        document.getElementById("message").textContent = "Нямате достатъчно точки!";
    }
}

// Функция за превключване на менюто
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Затваряне на менюто при клик извън него
document.addEventListener('click', (event) => {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});
