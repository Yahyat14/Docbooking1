document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('service');
    const priceInput = document.getElementById('price');
    const paymentForm = document.getElementById('payment-form');
    const receipt = document.getElementById('receipt');
    const displayName = document.getElementById('display-name');
    const displayService = document.getElementById('display-service');
    const displayPrice = document.getElementById('display-price');
    const displayDate = document.getElementById('display-date');

    // Liste des services et leurs prix
    const services = {
        "Cardiologie": 800,
        "Pédiatrie": 600,
        "Dermatologie": 700,
        "Radiologie": 900
    };

    // Fonction pour mettre à jour le prix en fonction du service sélectionné
    function updatePrice() {
        const selectedService = serviceSelect.value;
        const price = services[selectedService];
        priceInput.value = price ;
    }

    // Ajouter un écouteur d'événement pour mettre à jour le prix lorsqu'un service est sélectionné
    serviceSelect.addEventListener('change', updatePrice);

    // Mettre à jour le prix lors du chargement initial
    updatePrice();

    // Fonction pour générer le reçu
    function generateReceipt(event) {
        event.preventDefault();

        const patientName = document.getElementById('patient-name').value;
        const service = serviceSelect.value;
        const price = priceInput.value;
        const date = document.getElementById('date').value;

        // Afficher les informations dans le reçu
        displayName.textContent = patientName;
        displayService.textContent = service;
        displayPrice.textContent = price;
        displayDate.textContent = date;

        // Afficher le reçu
        receipt.style.display = 'block';
    }

    // Ajouter un écouteur d'événement pour générer le reçu lorsque le formulaire est soumis
    paymentForm.addEventListener('submit', generateReceipt);
});
    