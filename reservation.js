document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const doctor = document.getElementById('doctor').value;

    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `Merci ${name}, votre rendez-vous avec ${doctor} a été réservé avec succès !`;
});
