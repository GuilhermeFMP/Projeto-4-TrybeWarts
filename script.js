const loginBtn = document.getElementById('login-btn')

loginBtn.addEventListener('click', () => {
    const email = document.querySelector('input[name="email"]')
    const password = document.querySelector('input[name = "password"]')

    //estritamente igual? 
    //tá dando errado essa bomba
    if(email === 'trybe@teste.com' && password === '123456'){
        alert('Olá, Tryber')
    } else{
        alert('Email ou senha inválidos')
    }
})