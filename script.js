document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contacto__formulario');
    const nameField = form.querySelector('.contacto__campo[type="text"]');
    const emailField = form.querySelector('.contacto__campo[type="email"]');
    const subjectField = form.querySelector('.contacto__campo-asunto');
    const messageField = form.querySelector('.contacto__campo-mensaje');
    const errorText = form.querySelector('.error-nombre');
    const emailErrorText = form.querySelector('.error-email');
    const subjectErrorText = form.querySelector('.error-asunto');
    const messageErrorText = form.querySelector('.error-mensaje');
    
    const validateName = () => {
        const nameValue = nameField.value.trim();

        if (nameValue === '') {
            errorText.textContent = 'El campo "Nombre" no puede estar vacío.';
            return false;
        } else if (nameValue.length > 50) {
            errorText.textContent = 'El campo "Nombre" no puede tener más de 50 caracteres.';
            return false;
        } else {
            errorText.textContent = '';
            return true;
        }
    };

    const validateEmail = () => {
        const emailValue = emailField.value.trim();

        if (emailValue === '') {
            emailErrorText.textContent = 'El campo "Correo Electrónico" no puede estar vacío.';
            return false;
        }

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

    const validateMessage = () => {
        const messageValue = messageField.value.trim();

        if (messageValue === '') {
            messageErrorText.textContent = 'El campo "Mensaje" no puede estar vacío.';
            return false;
        } else if (messageValue.length > 300) {
            messageErrorText.textContent = 'El campo "Mensaje" no puede tener más de 300 caracteres.';
            return false;
        } else {
            messageErrorText.textContent = '';
            return true;
        }
    };

    form.addEventListener('submit', (e) => {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
            e.preventDefault(); 
        }
    });
});