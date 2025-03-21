
function loadPoints() {
    const savedPoints = localStorage.getItem('userPoints');
    return savedPoints ? parseInt(savedPoints) : 50; // Ако няма запазени точки, връща 50 като начална стойност
}


function savePoints(points) {
    localStorage.setItem('userPoints', points);
}

let points = loadPoints(); 

//
function updatePointsDisplay() { 
    document.getElementById('pointsDisplay').innerText = points;
}

function buyOffer(requiredPoints) {
    const messageElement = document.getElementById('message');

    if (points >= requiredPoints) {
        points -= requiredPoints; 
        savePoints(points); 
        updatePointsDisplay();
        messageElement.innerText = `Поръчката ви е приета. Трябва да я вземете от нашия магазин. (Харчени точки: ${requiredPoints})`;
        messageElement.style.color = "green";
    } else {
        messageElement.innerText = "Нямате достатъчно точки.";
        messageElement.style.color = "red";
    }

    setTimeout(() => {
        messageElement.innerText = "";
    }, 3000);
}


updatePointsDisplay();