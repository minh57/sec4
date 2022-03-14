import { setScreen } from './index.js'
import {InputCommon} from './inputCommon.js'
import { register } from './register.js'
class login{
    container = document.createElement("div")
    title =  document.createElement("h3")
    
    
    form =  document.createElement("form")
    inputEmail = new InputCommon("Email","email","Enter your email","inputEmail")
    inputPassword = new InputCommon("Password","password","Enter your Password","inputPassword")
    
    actionContainer = document.createElement("div")
    btnLogin = document.createElement("button")
    btnRegister = document.createElement("button")

    xuongDong = document.createElement("br")

    constructor(){
        this.title.innerHTML="Login"
        
        
        this.container.appendChild(this.form)
        

        this.form.appendChild(this.title)
        this.form.appendChild(this.inputEmail.container)
        this.form.appendChild(this.inputPassword.container)

        this.btnLogin.innerHTML = "Login"
        this.btnRegister.innerHTML = "Go to Register"
        this.btnLogin.addEventListener("click",(e)=>{
            e.preventDefault()
           const email = this.inputEmail.getValue()
            if(!email){
                this.inputEmail.setErrorMessage("Email không được để trống")
            }else{
                this.inputEmail.setErrorMessage("")
            }
             const password = this.inputPassword.getValue()
            if(!password){
                this.inputPassword.setErrorMessage("Password không được để trống")
            }else{
                this.inputPassword.setErrorMessage("")
            }
            
            //    Get value
            
           
            
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              // ...
              console.log("đã thành công")
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage)
            });
          
        })
        this.btnRegister.addEventListener("click",this.handleRedirectRegister )

      
        this.form.appendChild(this.btnLogin)
        this.form.appendChild(this.btnRegister)
    }
    handleRedirectRegister=(e)=>{
        e.preventDefault()
            const registerScreen = new register()
            setScreen(registerScreen.container)
    }
}
export {login}