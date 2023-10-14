
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
const firebaseConfig = {
    apiKey: "AIzaSyCit2M8eAl90WspOGJmf8U3yESzD_1dZA8",
    authDomain: "fir-login-a4d04.firebaseapp.com",
    projectId: "fir-login-a4d04",
    storageBucket: "fir-login-a4d04.appspot.com",
    messagingSenderId: "610307847179",
    appId: "1:610307847179:web:a1bdf5af2910d30ff7830e"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
const login = document.getElementById('login');
function ingresarUsuario() {

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  console.log(email);
  console.log(password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// click crear usuario
login.addEventListener('click', ingresarUsuario);

//REGISTAR
const registrar = document.getElementById('registrar');
function registrarUsuario() {

  let name = document.getElementById('name').value;   
  let email = document.getElementById('email2').value;
  let password = document.getElementById('password2').value;

  console.log(name);
  console.log(email);
  console.log(password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// click crear usuario
registrar.addEventListener('click', registrarUsuario);

//GOOGLE
const google2 = document.getElementById('google');
google2.addEventListener('click', e => {
    e.preventDefault();
    console.log('clic google');

    const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
          .then(result => {
            console.log("Google sign-in exitoso");
            console.log(result.user);
    })
    .catch(error => {
        console.error("Error en el inicio de sesión con Google:", error);
    });
});

//FACEBOOK
const facebook2 = document.getElementById('facebook');
facebook2.addEventListener('click', e => {
    e.preventDefault();
    console.log('clic facebook');

    const provider = new FacebookAuthProvider();
          signInWithPopup(auth, provider)
          .then(result => {
            console.log("Facebook sign-in exitoso");
            console.log(result.user);
    })
    .catch(error => {
        console.error("Error en el inicio de sesión con Facebook:", error);
    });
});


// const google = document.getElementById('google');
// function googleUsuario() {

//   let email = document.getElementById('email').value;
//   let password = document.getElementById('password').value;

//   console.log(email);
//   console.log(password);

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// }
// // click crear usuario
// google.addEventListener('click', googleUsuario);












// function login() {
//   let email = document.getElementById('email').value;
//   let password = document.getElementById('password').value;
  
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(function (userCredential) {
//       // User creation successful
//       var user = userCredential.user;
//       alert("Ingreso correctamente");
//     })
//     .catch(function (error) {
//       // User creation failed
//       console.error(error.message);
//       alert("Ocurrió un error al intentar ingresar: " + error.message);
//     });
// }


// function login() {
//   let email = document.getElementById('email').value;
//   let password = document.getElementById('password').value;
//   console.log(email);
//   console.log(password);
//   alert('logro ingresar correctamente')
  
// }

// function register() {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email2').value;
//     let password = document.getElementById('password2').value;
//     console.log(name);
//     console.log(email);
//     console.log(password);
//     alert('Usuario registrado correctamente')
// }
