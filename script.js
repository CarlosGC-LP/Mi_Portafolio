document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contacto__formulario');
    const nameField = form.querySelector('.contacto__campo[type="text"]');
    const emailField = form.querySelector('.contacto__campo[type="email"]');
    const subjectField = form.querySelector('.contacto__campo[type="text"]:nth-of-type(2)');
    const errorText = form.querySelector('.error-nombre');
    const emailErrorText = form.querySelector('.error-email');
    const subjectErrorText = form.querySelector('.error-asunto');
    
    const validateName = () => {
        const nameValue = nameField.value.trim();

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

    const validateEmail = () => {
        const emailValue = emailField.value.trim();

        if (emailValue === '') {
            emailErrorText.textContent = 'El campo "Correo Electrónico" no puede estar vacío.';
            return false;
        }

        // Expresión regular para validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailErrorText.textContent = 'Por favor, ingrese un correo válido (ejemplo@dominio.com).';
            return false;
        }

        emailErrorText.textContent = '';
        return true;
    };

    const validateSubject = () => {
        const subjectValue = subjectField.value.trim();

        if (subjectValue === '') {
            subjectErrorText.textContent = 'El campo "Asunto" no puede estar vacío.';
            return false;
        } else if (subjectValue.length > 50) {
            subjectErrorText.textContent = 'El campo "Asunto" no puede tener más de 50 caracteres.';
            return false;
        } else {
            subjectErrorText.textContent = '';
            return true;
        }
    };

    form.addEventListener('submit', (e) => {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();

        if (!isNameValid || !isEmailValid || !isSubjectValid) {
            e.preventDefault(); // Evitar envío del formulario si hay errores
        }
    });
});