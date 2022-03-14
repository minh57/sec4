class InputCommon{
    container = document.createElement("div")
    label = document.createElement("label")
    input = document.createElement("input")
    errMess = document.createElement("div")

    constructor(label,inputType,placeholder,name){
        this.label.innerHTML = label
        this.label.htmlFor = name
        this.input.type = inputType
        this.input.placeholder = placeholder
        this.input.name = name

        this.container.appendChild(this.label)
        this.container.appendChild(this.input)
        this.container.appendChild(this.errMess)
       
    }
    getValue=()=>{
        return this.input.value 
    }

    setErrorMessage = (errMess)=>{
        this.errMess.innerHTML = errMess
        this.errMess.style.color = "red"
    }
}
export {InputCommon}