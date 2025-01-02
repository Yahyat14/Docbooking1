document.getElementById('role').addEventListener('change', function() {
    const role = this.value;
    const professionalFields = document.querySelectorAll('.professional-info');
    
    if (role === 'professionnel') {
      professionalFields.forEach(function(field) {
        field.style.display = 'block';
      });
    } else {
      professionalFields.forEach(function(field) {
        field.style.display = 'none';
      });
    }
  });
  