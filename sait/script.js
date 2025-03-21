// Функция за показване на началната секция и скриване на формата

// Валидация на формата
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;
    const captcha = document.getElementById("captcha").checked;

    // Валидация на паролата
    const passwordError = validatePassword(password);
    if (passwordError) {
        alert(passwordError);
        return;
    }

    // Валидация на телефонния номер
    if (!validateMobile(mobile)) {
        alert("Моля, въведете валиден български телефонен номер!");
        return;
    }

    // Проверка за капча
    if (!captcha) {
        alert("Моля, потвърдете, че не сте робот!");
        return;
    }

    // Успешно изпращане
    alert("Успешно влизане! Сега можете да навигирате из сайта.");
    hideForm();
    activateLinks();
});

function showHome() {
    document.getElementById("login").style.display = "none";
    document.getElementById("home").style.display = "block";
}

// Функция за блокиране на навигационните връзки
function blockLinks() {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Моля, попълнете формата за вход/регистрация първо!");
        });
    });
}

// Функция за активиране на навигационните връзки
function activateLinks() {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.replaceWith(link.cloneNode(true));
    });
}

// Фалшива база данни за потребители
let users = {};

// Функция за регистрация на нов потребител
document.getElementById("register-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;
    const captcha = document.getElementById("captcha").checked;

    if (!email || !username || !password || !mobile || !captcha) {
        alert("Моля, попълнете всички полета и потвърдете, че не сте робот!");
        return;
    }

    if (users[email]) {
        alert("Този имейл вече е регистриран. Моля, използвайте друг имейл.");
        return;
    }

    users[email] = { username, password, mobile };
    alert("Регистрацията е успешна! Моля, влезте в системата.");
});

// Функция за забравена парола
document.getElementById("forgot-password-btn").addEventListener("click", function () {
    const email = prompt("Моля, въведете вашия имейл за нулиране на паролата:");
    if (email && users[email]) {
        alert("Изпратен е имейл с инструкции за нулиране на паролата на " + email);
    } else {
        alert("Имейлът не е намерен в нашата база данни.");
    }
});

// Валидация на формата и показване на началната секция
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!users[email] || users[email].password !== password) {
        alert("Невалиден имейл или парола!");
        return;
    }

    alert("Успешно влизане! Сега можете да навигирате из сайта.");
    showHome();
    activateLinks();
});

// Скриване на началната секция и блокиране на навигацията при зареждане на страницата
window.onload = function () {
    document.getElementById("home").style.display = "none";
    blockLinks();
};


// Валидация на паролата
function validatePassword(password) {
    const minLength = 6;
    const hasUppercase = /[A-Z]/.test(password); // Поне една главна буква
    const hasSpecialChar = /[!@#$%^&*]/.test(password); // Поне един специален символ

    if (password.length < minLength) {
        return "Паролата трябва да съдържа минимум 6 символа!";
    }
    if (!hasUppercase) {
        return "Паролата трябва да съдържа поне една главна буква!";
    }
    if (!hasSpecialChar) {
        return "Паролата трябва да съдържа поне един специален символ!";
    }
    return null; // Ако паролата е валидна
}

