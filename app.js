import{auth,createUserWithEmailAndPassword,onAuthStateChanged } from "./firebase.js"
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
       console.log("user",user)
      // ...
    } else {
      console.log("user not exist")

    }
  });
  

let signup=() =>{
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(( res) => {
    // Signed up 
    const user =  res.user;
    console.log("user", res.user)
    // ...
  })
  .catch((error) => {
     console.log("error",error.code)
    // ..
  });
}
let signupBtn= document.getElementById("signupBtn")
signupBtn.addEventListener("click",signup)
