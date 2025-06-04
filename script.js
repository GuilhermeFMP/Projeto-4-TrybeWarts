const loginBtn = document.getElementById('login-btn');
const emailInput = document.querySelector('.trybewarts-login input[name="email"]');
const passwordInput = document.querySelector('.trybewarts-login input[name="password"]');

loginBtn.addEventListener('click', function(event){
    event.preventDefault()

    const email = emailInput
    const password = passwordInput

    if(email === 'tryber@teste.com' && password === '123456'){
        alert('Olá, Tryber!')
    } else{
        alert('Email ou senha inválidos.')
    }
})

const checkbox = document.getElementById('agreement')
const button = document.getElementById('submit-btn')

checkbox.addEventListener('change', function (){
    button.disabled = !checkbox.checked
})