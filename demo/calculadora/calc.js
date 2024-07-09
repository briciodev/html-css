const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('resultado')

const keysPermitidas =  ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


document.querySelectorAll('.charKey').forEach(function (charkeybt) {
    charkeybt.addEventListener('click', function () {
        const value = charkeybt.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
    resultInput.value = ""
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (keysPermitidas.includes(ev.key)) {
       input.value += ev.key
       return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
})
document.getElementById('igual').addEventListener('click', calculate)

function calculate() {
    resultInput.value = ' ERROR'
    resultInput.classList.add('error')

    const resultado = eval(input.value)
    resultInput.value = resultado
    resultInput.classList.remove('error')
}

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = "light"
    }else{
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = "dark"
    }
})

document.getElementById('copiar').addEventListener('click', function (ev) {
    const botao = ev.currentTarget 
    if (botao.innerText === 'Copy') {
        botao.innerText = "copiado!"
        botao.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    }else{
        botao.innerText = 'Copy'
        button.classList.remove("success")
    }
})