document.addEventListener("DOMContentLoaded", function () {
    // Animación del título de bienvenida
    let welcomeText = document.getElementById("welcome-text");
    let text = "¡Hola! Soy Leonardo Avendaño, un apasionado estudiante de Ingeniería de Sistemas con un gran interés en la tecnología, el desarrollo web y la innovación digital. Me encanta resolver problemas, crear experiencias interactivas y aprender nuevas herramientas para mejorar mis habilidades"
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            welcomeText.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    welcomeText.textContent = ""; // Vaciar el texto al inicio
    typeEffect(); // Iniciar animación

    // Efecto hover en la imagen de perfil
    let profileImg = document.getElementById("profile-img");
    profileImg.addEventListener("mouseover", function () {
        profileImg.style.transform = "scale(1.2)";
        profileImg.style.transition = "transform 0.3s ease-in-out";
    });

    profileImg.addEventListener("mouseout", function () {
        profileImg.style.transform = "scale(1)";
    });

    // Alerta en el botón de contacto
    let contactBtn = document.getElementById("contact-btn");
    contactBtn.addEventListener("click", function () {
        alert("¡Gracias por tu interés! Envíame un correo para empezar tu proyecto.");
    });
});