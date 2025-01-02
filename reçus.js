document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('patient-name').value;
    const service = document.getElementById('service').value;
    const price = document.getElementById('price').value;
    const date = document.getElementById('date').value;

    document.getElementById('display-name').textContent = name;
    document.getElementById('display-service').textContent = service;
    document.getElementById('display-price').textContent = price;
    document.getElementById('display-date').textContent = date;

    document.querySelector('.receipt').style.display = 'block';
    document.querySelector('.receipt').classList.add('fadeIn');
});
