
//const button = document.getElementById('login')
//const container = document.querySelector('.container')


function logar() {
    const email = document.querySelector('.email').value
    const password = document.querySelector('.senha').value

    if (email === 'admin' && password === 'admin') {
        location.href = "./pagina-2/index.html"
    } else {
        alert('Email ou Senha inválidas')
    }

    email = ""

    //container.innerHTML = email.password.value
}

// button.addEventListener('click', login)