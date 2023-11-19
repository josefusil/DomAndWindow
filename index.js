const text = document.querySelector('h1')
console.log()
text.style.color = 'red'
text.style.textAlign = 'center'

const new_text = document.querySelectorAll('.text-diferent')
console.log(new_text)

let pedirColor = confirm("Quieres elegir el color de los ultimos dos textos ?")
if (pedirColor === true) {
    let color = prompt("cual color quieres?")
    for (let iterador of new_text) {
        iterador.style.color = color
    }
} else {
    for (let iterador of new_text) {
        iterador.style.color = 'green'
    }
}
text.innerHTML = '<p>Ahora ya no soy un encabezado</p>'