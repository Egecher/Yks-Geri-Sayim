const examDate = new Date('2025-06-14T10:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = examDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye kaldı.`;
    } else {
        document.getElementById('countdown').innerHTML = "Sınav başladı!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();