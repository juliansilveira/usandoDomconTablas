

let container = document.querySelector('.container');
let button = document.querySelector('#btn');
const input = document.querySelector('#input');

const para = document.createElement('p');


let ul = document.createElement('ul');
para.innerText = 'contenido agregado desde js!';

button.addEventListener('click', () => {


  let li = document.createElement('li');

  li.innerText = input.value



  if (input.value == '') {
    alert('Llene todos los campos por favor')
  } else {
    ul.appendChild(li);
    container.appendChild(ul)
  }
  input.value = '';

});

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//   console.log(number);

//   let algo = document.createElement('p');

//   algo.innerText = `numero ${number}`

//   container.appendChild(algo);
// });
// 

// CREANDO LOCALSTORAGE JUGADORES 

lista = [];
fetch('./jugadores.json')
  .then(response => response.json())
  .then(jugadores => {
    // Aquí puedes trabajar con el contenido del archivo JSON
    console.log("esto es elfecth", jugadores);

    let nuevo = jugadores.jugadores

    nuevo.forEach(jugador => {


      const filaDeJugadores = document.createElement('tr');

      const dniJugador = document.createElement('td');
      dniJugador.textContent = `${jugador.dni}`

      const apellidoJugador = document.createElement('td');
      apellidoJugador.textContent = `${jugador.apellido}`

      const nombreJugador = document.createElement('td');
      nombreJugador.textContent = `${jugador.nombre}`

      const posicionJugador = document.createElement('td');
      posicionJugador.textContent = `${jugador.posicion}`

      const apodoJugador = document.createElement('td');
      apodoJugador.textContent = `${jugador.apodo}`

      const dorsalJugador = document.createElement('td');
      dorsalJugador.textContent = `${jugador.dorsal}`

      const pieJugador = document.createElement('td');
      pieJugador.textContent = `${jugador.pie}`



      // localStorage.setItem(`${dni+1}`, `${jugador.nombre}`);

      // localStorage.getItem(`${jugador.dorsal}`)

      filaDeJugadores.appendChild(dniJugador);
      filaDeJugadores.appendChild(apellidoJugador);
      filaDeJugadores.appendChild(nombreJugador);
      filaDeJugadores.appendChild(posicionJugador);
      filaDeJugadores.appendChild(apodoJugador);
      filaDeJugadores.appendChild(dorsalJugador);
      filaDeJugadores.appendChild(pieJugador);

      let tabla = document.querySelector('table')

      tabla.appendChild(filaDeJugadores)

      let botonEditar = document.createElement('button')
      let botonEliminar = document.createElement('button');
      let botonSeleccionar = document.createElement('button');


      filaDeJugadores.appendChild(botonEditar)
      botonEditar.innerText = 'Editar';

      filaDeJugadores.appendChild(botonEliminar)
      botonEliminar.innerText = 'Eliminar';

      filaDeJugadores.appendChild(botonSeleccionar)
      botonSeleccionar.innerText = 'Seleccionar'

      botonEditar.addEventListener('click', () => {
        console.log('Editado', jugador.nombre)
      })

      botonEliminar.addEventListener('click', () => {
        console.log('Eliminado', jugador.nombre)
      })

      botonSeleccionar.addEventListener('click', () => {
        console.log('Seleccionado', jugador.nombre)
      })
    });
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error al leer el archivo JSON:', error);
  });
console.log(lista);