
const alert = document.querySelector('.alert');

const submitButton = document.querySelector('button');

submitButton.addEventListener("click",()=>{
    const password = document.querySelector('#password');
    const confirm = document.querySelector('#confirm');
    if(password.value === confirm.value){
        password.classList.remove('invalid');
        confirm.classList.remove('invalid');
        alert.style.display = "none";
    }else{
        password.classList.add('invalid');
        confirm.classList.add('invalid');
        alert.style.display = "block";
    }
});