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

//ir al cambiar contraseña
const forgotPassword = document.getElementById('forgotPasswordLink');
const passwordForm = document.querySelector('.form-box.password'); // Selecciona el formulario de recuperación de contraseña

forgotPassword.onclick = () => {
    document.querySelector('.form-box.login').style.display = 'none';
    passwordForm.style.display = 'block';
};
 //volver al login
const backToLoginButton = document.getElementById('volver');
backToLoginButton.addEventListener('click', () => {
  
  document.querySelector('.form-box.login').style.display = 'block';

  passwordForm.style.display = 'none';
});



// const signupForm = document.querySelector('#signup-form');

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = document.querySelector('#signup-email').value;
//     const password = document.querySelector('#signup-password').value;

//       auth
//           .createUserWithEmailAndPassword(email, password)
//           .then(userCredential => {
//             console.log('sign up')
//           })
// })




