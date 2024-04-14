document.addEventListener("DOMContentLoaded", function(){
    // ESCENARIOS
    const escInicio = document.querySelector(".inicio");
    const escUsuarioElige = document.querySelector(".usuario_elige");
    const escComputadoraElige = document.querySelector(".computador_elige");
    const escResultado = document.querySelector(".resultado");
    
    // ELEMENTOS DEL DOM
    const btnIniciar = document.querySelector(".btnIniciar");
    const btnPiedra = document.querySelector(".btn_Piedra");
    const btnPapel = document.querySelector(".btn_Papel");
    const btnTijera = document.querySelector(".btn_Tijera");
    const txtEleccComputador = document.querySelector(".elecComputador");
    const btnContinuar = document.querySelector(".btnContinuar");
    const txtresultado = document.querySelector(".resultado h1");
    const txtmnsjResultado = document.querySelector(".resultado h2");
    const btnRepeat = document.querySelector(".repeat");
    const animComputadorElige = document.querySelector(".computador_elige div");
    const papel=document.getElementById("papel");
    const piedra=document.getElementById("piedra");
    const tijeras=document.getElementById("tijeras");
    
    // LOGICA
    let eleccionUsuario;
    let eleccionComputador;
    
    // INICIALIZACION 
    escUsuarioElige.style.display = "none";
    escComputadoraElige.style.display = "none";
    escResultado.style.display = "none";
    
    // CUANDO SE PRESIONA EL BOTON INICIAR
    btnIniciar.addEventListener("click", function(){
        escInicio.style.display = "none";
        escUsuarioElige.style.display = "block";
    });
    
    function eleccionUsuarioFunc(eleccion){
        return eleccion;
    }

    function eleccionComputadorFunc(){
        let elecc = Math.random();
        if (elecc < 0.3333333){
            elecc="piedra";
        } else if (elecc < 0.66666666){
            elecc="papel";
        } else {
            elecc="tijeras";
        }
        animComputadorElige.classList.add(`animacion_${elecc}`);

        return elecc;
    }

    function resultadofunc(u, c){
        if ((u == "piedra" && c == "piedra") || 
            (u == "papel" && c == "papel") || 
            (u == "tijeras" && c == "tijeras")){
            txtresultado.innerHTML = `Es un empate`;
            txtmnsjResultado.innerHTML = `El usuario eligió ${u} y el computador eligió ${c}`;

        } else if ((u == "piedra" && c == "tijeras") || 
                   (u == "papel" && c == "piedra") ||
                   (u == "tijeras" && c == "papel")){
            txtresultado.innerHTML = `Ganaste!`;
            txtmnsjResultado.innerHTML = `${u} gana a${c}`;
        } else if ((u == "piedra" && c == "papel") || 
                   (u == "papel" && c == "tijeras") || 
                   (u == "tijeras" && c == "piedra")){
            txtresultado.innerHTML = `Perdiste...`;
            txtmnsjResultado.innerHTML = `${c} gana a ${u}`;
        }
    }

    btnPiedra.addEventListener("click", function(){
        eleccionUsuario = eleccionUsuarioFunc("piedra");
        if (escUsuarioElige.style.display == "block"){
            escUsuarioElige.style.display = "none";
            escComputadoraElige.style.display = "block";
            eleccionComputador = eleccionComputadorFunc();
            txtEleccComputador.innerHTML = eleccionComputador;
        }
        
    });

    btnPapel.addEventListener("click", function(){
        eleccionUsuario = eleccionUsuarioFunc("papel");
        if (escUsuarioElige.style.display == "block"){
            escUsuarioElige.style.display = "none";
            escComputadoraElige.style.display = "block";
            eleccionComputador = eleccionComputadorFunc();
            txtEleccComputador.innerHTML = eleccionComputador;
        }
    });

    btnTijera.addEventListener("click", function(){
        eleccionUsuario = eleccionUsuarioFunc("tijeras");
        if (escUsuarioElige.style.display == "block"){
            escUsuarioElige.style.display = "none";
            escComputadoraElige.style.display = "block";
            eleccionComputador = eleccionComputadorFunc();
            txtEleccComputador.innerHTML = eleccionComputador;
        }
    });

    btnContinuar.addEventListener("click", function(){
        escComputadoraElige.style.display = "none";
        escResultado.style.display = "block";
        resultadofunc(eleccionUsuario, eleccionComputador);
    });
    btnRepeat.addEventListener("click", function(){
        escResultado.style.display = "none";
        escInicio.style.display = "block";
        animComputadorElige.classList.remove(`animacion_${eleccionComputador}`);
    });

    btnPapel.addEventListener("mouseover", function(){
        papel.classList.add("animacion_papel");
    });
    btnPapel.addEventListener("mouseout", function(){
        papel.classList.remove("animacion_papel");
    });
    btnPiedra.addEventListener("mouseover", function(){
        piedra.classList.add("animacion_piedra");
    });
    btnPiedra.addEventListener("mouseout", function(){
        piedra.classList.remove("animacion_piedra");
    });
    btnTijera.addEventListener("mouseover", function(){
        tijeras.classList.add("animacion_tijeras");
    });
    btnTijera.addEventListener("mouseout", function(){
        tijeras.classList.remove("animacion_tijeras");
    });
        
});
