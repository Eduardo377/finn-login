const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const togglePasswordHidden = document.getElementById('togglePasswordHidden');
const eyesClosed = document.querySelectorAll('.eye');

let isEyesClosed = false;

function closeEyes() {
    isEyesClosed = true;
    eyesClosed.forEach(eye => {
        eye.classList.remove('eye');
        eye.classList.add('closed');
    });
}

function openEyes() {
    isEyesClosed = false;
    eyesClosed.forEach(eye => {
        eye.classList.remove('closed');
        eye.classList.add('eye');
    });
}

function togglePasswordVisibility() {
    passwordInput.addEventListener('mouseover', () => {
        if (passwordInput.type === 'password') {
            togglePasswordHidden.style.display = 'block'
            closeEyes();
        }
    });
}

togglePasswordHidden.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.style.display = 'block';
        togglePasswordHidden.style.display = 'none';
        openEyes();
    }
});

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'text') {
        passwordInput.type = 'password';
        togglePassword.style.display = 'none';
        togglePasswordHidden.style.display = 'block';
        closeEyes();
    }
});

// implementações futuras

// function togglePasswordVisibilityMouseout() {
//     passwordInput.addEventListener('mouseout', () => {
//         togglePassword.style.display = 'none';
//         togglePasswordHidden.style.display = 'none';
//     });
// }

// function togglePasswordVisibilityMousedown() {
//     passwordInput.addEventListener('mousedown', () => {
//         passwordInput.type === 'password' ? togglePasswordHidden.style.display = 'block' : togglePassword.style.display = 'block';
//     });
// }

document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye-container");
    if (isEyesClosed) return;

    eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);

        const distance = 10;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        eye.style.transform = `translate(${x}px, ${y}px)`;
    });
});

function createSnowflakes() {
    const snowflakeCount = 3;
    const snowflakeContainer = document.body;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        const size = Math.random() * 5 + 5;
        const position = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 5;

        snowflake.classList.add('snowflake');
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${position}vw`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animationDuration = `${duration}s`;

        snowflakeContainer.appendChild(snowflake);

        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    setTimeout(createSnowflakes, 3000);
}

// togglePasswordVisibilityMouseout(),
// togglePasswordVisibilityMousedown()
togglePasswordVisibility()

document.addEventListener(
    'DOMContentLoaded',
    createSnowflakes(),
);