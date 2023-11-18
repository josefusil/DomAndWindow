const text = document.querySelector('h1')
console.log()
text.style.color = 'red'
text.style.textAlign = 'center'

const new_text = document.querySelectorAll('.text-diferent')
console.log(new_text)

let pedirColor = prompt("Elige el color de los ultimos dos parrafos")
for (let iterador of new_text) {
    iterador.style.color = pedirColor
}