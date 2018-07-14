const tareaNueva = document.getElementById('tareaNueva')
const agregar = document.getElementById('agregar')
const lista = document.getElementById('lista')

const eliminarTarea = (e) => {
    e.target.parentNode.remove();
}
const imprimirTarea = () => {
    if(tareaNueva.value.trim()){
        console.log(tareaNueva.value)
        let elemntoLista = document.createElement('li')
        let span = document.createElement('span')
        span.classList.add('eliminar')
        elemntoLista.textContent = tareaNueva.value
        span.textContent = 'X'
        lista.appendChild(elemntoLista)
        elemntoLista.appendChild(span)
        tareaNueva.value = ''
        span.addEventListener('click', (e) => eliminarTarea(e))
    }
    else{
        alert('Debes agregar una tarea')
    }
    console.log(eliminar)
}

agregar.addEventListener('click', () => imprimirTarea())
tareaNueva.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        imprimirTarea()
    }
})


