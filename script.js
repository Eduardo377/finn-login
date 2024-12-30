const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const togglePasswordHidden = document.getElementById('togglePasswordHidden');

function togglePasswordVisibility() {
    passwordInput.addEventListener('mouseover', () => {
        passwordInput.type === 'password' ? togglePasswordHidden.style.display = 'block' : togglePassword.style.display = 'block';
    });
}


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

togglePasswordHidden.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.style.display = 'block';
        togglePasswordHidden.style.display = 'none';
    }
});

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'text') {
        passwordInput.type = 'password';
        togglePassword.style.display = 'none';
        togglePasswordHidden.style.display = 'block';
    }
});


function createSnowflakes() {
    const snowflakeCount = 1;
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

window.addEventListener(
    'DOMContentLoaded',
    createSnowflakes(),
    togglePasswordVisibility()
    // togglePasswordVisibilityMouseout(),
    // togglePasswordVisibilityMousedown()
);