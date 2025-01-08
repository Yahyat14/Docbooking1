document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const doctor = document.getElementById('doctor').value;

    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `Merci ${name}, votre rendez-vous avec ${doctor} a été réservé avec succès !`;
});

// Configuration du calendrier
flatpickr("#datePicker", {
    enableTime: false,
    dateFormat: "d/m/Y",
    minDate: "today",
    locale: "fr",
    inline: true,
    appendTo: document.getElementById('calendar-inline'),
    disable: [
        function(date) {
            // Désactive les weekends
            return date.getDay() === 0 || date.getDay() === 6;
        }
    ],
    onChange: function(selectedDates, dateStr) {
        // Met à jour l'input et le résumé
        document.getElementById('datePicker').value = dateStr;
        document.getElementById('selectedDate').textContent = dateStr;
    }
});
