
//const button = document.getElementById('login')
//const container = document.querySelector('.container')


function logar() {
    const email = document.querySelector('.email').value
    const password = document.querySelector('.senha').value

    if (email === 'admin' && password === 'admin') {
        location.href = "http://127.0.0.1:5500/instagram.html"
    } else {
        alert('Email ou Senha inválidas')
    }

    email = ""

    //container.innerHTML = email.password.value
}

// button.addEventListener('click', login)