let totalPoints = 0; // Променлива за общите точки

function trainExercise(button) {
    const card = button.closest('.exercise-card');
    const videoContainer = card.querySelector('.video-container');
    const iframe = card.querySelector('iframe');
    const totalPointsDisplay = document.getElementById('total-points');

    // Проверка дали видеото вече е гледано
    if (card.classList.contains('completed')) {
        alert("Вече сте гледали това видео и не можете да получите повече точки.");
        return;
    }

    // Показване на видеото
    videoContainer.style.display = "block";
    iframe.src = `https://www.youtube.com/embed/${card.getAttribute('data-video-id')}?autoplay=1`;

    // Деактивиране на бутона
    button.disabled = true;

    // Добавяне на 5 точки към общия брой
    totalPoints += 5;
    totalPointsDisplay.textContent = totalPoints;

    // Маркиране на упражнението като завършено
    card.classList.add("completed");

    // Слушане за край на видеото
    iframe.addEventListener('ended', () => {
        alert("Видеото приключи! Получихте 5 точки.");
    });
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