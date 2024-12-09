document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contacto__formulario');
    const nameField = document.querySelector('.contacto__campo[type="text"]');
    
    const validateName = () => {
        const nameValue = nameField.value.trim();
        const errorContainer = document.querySelector('.error-nombre');
        
        if (!errorContainer) {
            const newError = document.createElement('p');
            newError.className = 'error-nombre';
            newError.style.color = 'red';
            newError.style.fontSize = '0.9rem';
            nameField.insertAdjacentElement('afterend', newError);
        }
        
        const errorText = document.querySelector('.error-nombre');
        
        if (nameValue === '') {
            errorText.textContent = 'El campo "Nombre" no puede estar vacío.';
            return false;
        } else if (nameValue.length > 50) {
            errorText.textContent = 'El campo "Nombre" no puede tener más de 50 caracteres.';
            return false;
        } else {
            errorText.textContent = ''; // Limpiar error si todo está bien
            return true;
        }
    };

    nameField.addEventListener('input', validateName);

    form.addEventListener('submit', (e) => {
        const isNameValid = validateName();
        if (!isNameValid) {
            e.preventDefault(); // Evitar envío del formulario si hay errores
        }
    });
});
