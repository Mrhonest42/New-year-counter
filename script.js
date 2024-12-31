

const countdownElement = document.getElementById('timer');
const greeting = document.getElementById('countdown');
const fireworksElement = document.getElementById('fireworks');

// Set the date and time for the countdown
const targetDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        greeting.textContent = 'Happy New Year 2025!';
        fireworksElement.classList.remove('hidden');
        countdownElement.classList.add('none');
        greeting.classList.remove('greet');

    } else {
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const d = days<10?`0${days}`:days;
        const h = hours<10?`0${hours}`:hours;
        const m = minutes<10?`0${minutes}`:minutes;
        const s = seconds<10?`0${seconds}`:seconds;


        countdownElement.textContent = `${d} : ${h} : ${m} : ${s}`;
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
