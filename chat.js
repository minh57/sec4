
class Chat {
    container = document.createElement("div")
    btnLogout = document.createElement("button")
    constructor(){
        this.container.innerHTML = "chat"
        
        this.btnLogout.innerHTML = "Log out"
        this.btnLogout.addEventListener("click",this.handleLogout)
        this.container.appendChild(this.btnLogout)
    }
    handleLogout=(e)=>{
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("thành công")
          }).catch((error) => {
            // An error happened.
            console.log(errorMessage)
          });
    }
}
export {Chat}