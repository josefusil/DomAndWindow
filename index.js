const text = document.querySelector('h1')
console.log()
text.style.color = 'gray'
text.classList.toggle('textH1After')


let new_text = document.querySelector('h3')
new_text.classList.toggle('textHeader')
let lastText = document.querySelector('.text-third')
lastText.classList.toggle('textHeader')
let opcion = confirm("Quieres cambiar el primer texto?")
if (opcion) {
    text.innerText = 'Hola mundo'
}

function writingHtml (name,age) {
    const main = document.querySelector('main')
    const myTemplate = `
    <h1> soy ${name}</h1>
    <p> tengo ${age} años de edad</p>
    `
    main.innerHTML += myTemplate
}
writingHtml('jose', '35')