// import {login} from './login.js'
import {Chat} from './chat.js'
import { register } from './register.js'


const app = document.querySelector("#app")

const setScreen = (container)=>{
    app.innerHTML = ""
    app.appendChild(container)
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
      const chat = new Chat()
      setScreen(chat.container)
    } else {
      // User is signed out
      // ...
    // set màn hình chính
const Register = new register()
setScreen(Register.container)

    }
  });


export{setScreen}



