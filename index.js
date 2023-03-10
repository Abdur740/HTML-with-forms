function validateName(){
    let userName = document.getElementById('user-name');
    let nameErr = document.getElementById("name-err")
    if(userName.value !="" && userName.value.match(/^[A-Za-z" "]+$/)){
        nameErr.innerHTML = `<img src="tick.svg">`
        return true
    }
    nameErr.innerHTML = `<img src="cancel.svg">`;
    return false
}
function validateEmail(){
    let userEmail = document.getElementById("email-id")
    let emailErr = document.getElementById('email-err')
    if(userEmail.value.match(/^[a-z.com@0-9]+$/)){
        emailErr.innerHTML = `<img src="tick.svg">`
        return true
    }
    emailErr.innerHTML = `<img src="cancel.svg">`
    return false
}
function validateDate(){
    let userDate = document.getElementById('dob')
    console.log(userDate.value)
    let dateErr = document.getElementById('dob-err')
    let userEnterDate=new Date(userDate.value);
    let today = new Date();
    if(userEnterDate < today){
        dateErr.innerHTML = `<img src="tick.svg">`
        return true
    }
    dateErr.innerHTML = `<img src="cancel.svg">`
    return false
}
function validatePhoneNumber(){
    let phoneNumber = document.getElementById('phoneNumber')
    let phoneErr = document.getElementById('ph-err')
    if(phoneNumber.value.length > 10 && phoneNumber.value.match(/^[0-9]+$/)){
        phoneErr.innerHTML =`<img src="cancel.svg">`
        return false
    }
    phoneErr.innerHTML = `<img src="tick.svg">`
    return true
}

function validatepassword(){
    let password = document.getElementById('password')
     let passwordErr = document.getElementById('pass-err')
     console.log(password.value)
   if(password.value.length>6){
        passwordErr.innerHTML = `<img src="tick.svg">`
        return true
   }
   passwordErr.innerHTML = `<img src="cancel.svg">`
   return false
}

function validateForm(e){
    
    if(validateName()&&validateEmail()&&validateDate()&&validatePhoneNumber()&&validatepassword()){
        alert("Detailes are added")
        document.getElementById("form").reset()
    }else{
        alert("Fields are not valid")
        e.preventDefault()
    }
       
}