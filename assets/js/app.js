/*--------- MOSTRAR SENHA ----------*/
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})


/*--------- VALIDAÇÃO DE CADASTROS DE USUÁRIOS ----------*/
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: #F57C7C')
        labelNome.innerHTML = 'Senha *Insira no mínimo 3 caracteres'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: #4FDF55')
        labelNome.innerHTML = 'Nome completo'
        validNome = true
    }
})

email.addEventListener('keyup', ()=> {
    if(email.value.length <= 9){
        labelEmail.setAttribute('style', 'color: #F57C7C')
        labelEmail.innerHTML = 'E-mail *Insira um e-mail válido'
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: #4FDF55')
        labelEmail.innerHTML = 'E-mail'
        validEmail = true
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: #F57C7C')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: #4FDF55')
        labelSenha.innerHTML = 'Senha válida'
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', ()=> {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: #F57C7C')
        labelConfirmSenha.innerHTML = 'Confirmar senha *As senhas não conferem'
        validconfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: #4FDF55')
        labelConfirmSenha.innerHTML = 'Confirmar senha'
        validConfirmSenha = true
    }
})

function cadastrar(){
    if(validNome && validEmail && validSenha && validCsonfirmSenha){
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push(
            {
                nome: nome.value,
                email: email.value,
                senha: senha.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Cadastrando usuário...'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=> {
            window.location.href = 'https://www.google.com.br/'
        }, 3000)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha todos os campos corretamente!'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }
}