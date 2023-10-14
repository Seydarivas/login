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


function login() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  console.log(email);
  console.log(password);
  alert('logro ingresar correctamente')
  
}

// function register() {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email2').value;
//     let password = document.getElementById('password2').value;
//     console.log(name);
//     console.log(email);
//     console.log(password);
//     alert('Usuario registrado correctamente')
// }
