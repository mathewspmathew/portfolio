
const errorElementTextarea = document.getElementById('error-text-area')
const errorElementName = document.getElementById('error-name')
const errorElementEmail = document.getElementById('error-email')


const name=document.getElementById('name')
const email=document.getElementById('email')
const form=document.getElementById('form')
const textarea = document.getElementById('text-area-message')

form.addEventListener('submit', (e)=>{

    
    const email_check= /^([A-Za-z0-9_\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const name_check = /^[a-zA-Z\s-]+$/;

    if (!email.value.match(email_check)){
        e.preventDefault();
        errorElementEmail.innerText="Email invalid";
    }else{
        errorElementEmail.innerText="";
    }

    if(textarea.value === '' || textarea.value === null ){
        e.preventDefault()
   
         errorElementTextarea.innerText = "enter a message"
        
    }else{
        errorElementTextarea.innerText="";
    }

    if(name.value.length < 3){
        e.preventDefault()

         errorElementName.innerText = "invalid name"

    }else{
        errorElementName.innerText="";
    }

    if(name.value === '' || name.value === null){
        e.preventDefault()

         errorElementName.innerText = "enter the name"

    }else{
        errorElementName.innerText="";
    }
    
    if(containsNumber(name.value) == true){
        e.preventDefault()

         errorElementName.innerText = "enter the alphabets"

    }else{
        errorElementName.innerText="";
    }

    if (!name.value.match(name_check)){
        e.preventDefault();
        errorElementName.innerText="Name invalid or may contains special charcters";
    }else{
        errorElementName.innerText="";
    }

    // if(email.value.length < 15){
    //     e.preventDefault()
    //     errorElementEmail.innerText = "enter a email"
    // }

    // if(containsNumber(email.value) == true){
    //     e.preventDefault()
    //     errorElementEmail.innerText = "remove number in that email"
    // }

    // if(ValidateEmail(email.value) == true){
    //     e.preventDefault()
    //     errorElementEmail.innerText = "enter an original email"
    // }
   
})

function containsNumber(str) {
    return /\d/.test(str);
  }


// function ValidateEmail(email) 
//   {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Test the email against the regex pattern
//     return regex.test(mail);
//   }