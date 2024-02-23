//
const arrBotones = document.querySelectorAll('button');
const arrOrdenador = ['piedra','papel','tijera'];
let puntosUsuario = 0;
let puntosOrdenador = 0;

for (let i=0; i < arrBotones.length; i++) {
    console.log(arrBotones[i]);
    arrBotones[i].addEventListener('click', function(){   
        let opcUsuario = arrBotones[i].dataset.jugada;
        let numAleatorio = (Math.random()*2).toFixed(0);
        let opcOrdenador = arrOrdenador[numAleatorio];
        compararJugada(opcUsuario, opcOrdenador);
        mostrarResultado();

    });
}


function compararJugada(usuario, ordenador){
    
    if (usuario === 'piedra' && ordenador === 'papel')
    {
        puntosOrdenador++;
    }
    else if (usuario === 'papel' && ordenador === 'piedra')
    {
        puntosUsuario++;
    }
    else if (usuario === 'piedra' && ordenador === 'tijera')
    {
        puntosUsuario++;
    }
    else if (usuario === 'tijera' && ordenador === 'piedra')
    {
        puntosOrdenador++;
    }
    else if (usuario === 'papel' && ordenador === 'tijera')
    {
        puntosOrdenador++;
    }
    else if (usuario === 'tijera' && ordenador === 'papel')
    {
        puntosUsuario++;
    }
}

function mostrarResultado(){
    const contadorUsuario = document.getElementById('contador-usuario');
    const contadorOrdenador = document.getElementById('contador-ordenador');
    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
    contadorOrdenador.textContent  = `Puntos de la máquina: ${puntosOrdenador}`;
}
