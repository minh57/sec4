import { setScreen } from './index.js'
import {InputCommon} from './inputCommon.js'
import {login} from './login.js'
class register{
    container = document.createElement("div")
    title =  document.createElement("h3")
    
    
    form =  document.createElement("form")
    inputName = new InputCommon("Tên bạn","email","Enter your name","inputName")
    inputEmail = new InputCommon("Email","email","Enter your email","inputEmail")
    inputPassword = new InputCommon("Password","password","Enter your Password","inputPassword")
    inputConfirmPassword = new InputCommon("Confirm password","password","Enter your confirm password","input confirm Password")
    
    actionContainer = document.createElement("div")
    btnLogin = document.createElement("button")
    btnRegister = document.createElement("button")

    constructor(){
        this.title.innerHTML="Register"
        
        this.container.appendChild(this.form)
       
        
        this.form.appendChild(this.title)
        this.form.appendChild(this.inputName.container)
        this.form.appendChild(this.inputEmail.container)
        this.form.appendChild(this.inputPassword.container)
        this.form.appendChild(this.inputConfirmPassword.container)
 
        this.btnLogin.innerHTML = "Go to Login"
        this.btnRegister.innerHTML = "Register"
        this.btnRegister.style = "border-radius:0px;background-color:blue;color:white"
        this.btnLogin.addEventListener("click",(e)=>{
            e.preventDefault()
            const loginScreen = new login()
            setScreen(loginScreen.container)
        })
      
        this.btnRegister.addEventListener("click",(e)=>{
            e.preventDefault()
        //    Get value
        const email = this.inputEmail.getValue()
        const password = this.inputPassword.getValue()
        
        // Check email and password is empty
        
        
        //    Register
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
        console.log(`User ${email} is created`)
    })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage ="Hãy nhập đúng email";
    // ..
    this.inputEmail.setErrorMessage(errorMessage)
    });
    const emailValue =this.inputEmail.getValue()
    if(!emailValue){
        this.inputEmail.setErrorMessage("Email không được để trống")
    }else{
        this.inputEmail.setErrorMessage("")
    }
    const passwordValue = this.inputPassword.getValue()
    if(!passwordValue){
        this.inputPassword.setErrorMessage("Password không được để trống")
    }else if(passwordValue.length < 6){
        this.inputPassword.setErrorMessage("Mật khẩu phải trên 6 kí tự")
    }else{
        this.inputPassword.setErrorMessage("")
    }
    const nameValue = this.inputName.getValue()
    if(!nameValue){
        this.inputName.setErrorMessage("Tên không được để trống")
    }else{
        this.inputName.setErrorMessage("")
    }
    const confirmPasswordValue = this.inputConfirmPassword.getValue()
    if(confirmPasswordValue === passwordValue){
        this.inputConfirmPassword.setErrorMessage("")
    }else{
        this.inputConfirmPassword.setErrorMessage("Nhập lại password chính xác")
    }


    })
        this.form.appendChild(this.btnLogin)
        this.form.appendChild(this.btnRegister)
    }
}
export {register}