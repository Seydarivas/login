const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};

/*const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const passwordForm = document.querySelector('.form-box.password'); // Selecciona el formulario de recuperación de contraseña

forgotPasswordLink.onclick = () => {
    // Oculta el formulario de inicio de sesión y el formulario de registro (si están visibles)
    document.querySelector('.form-box.login').style.display = 'none';
    document.querySelector('.form-box.register').style.display = 'none';

    // Muestra el formulario de recuperación de contraseña
    passwordForm.style.display = 'block';
};*/

// const signupForm = document.getElementById('login()');

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
    

//     auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(userCredential => {
//       console.log('Usuario registrado exitosamente');
//     })
//     .catch(error => {
//       console.error('Error al registrar el usuario:', error.message);
//     });

// })




