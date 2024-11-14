/*document.getElementById('loginButton').addEventListener('click', function() {
    // Mostrar la cortina
    const curtain = document.getElementById('curtain');
    curtain.style.right = '0'; // Mueve la cortina hacia la izquierda

    // Después de que la cortina cubra la pantalla, redirigir a otra página
    setTimeout(function() {
        window.location.href = "nueva-pagina.html"; // Cambia la URL a la nueva página
    }, 1000); // Espera el tiempo del efecto antes de redirigir
});
*//*
document.getElementById("loginButton").addEventListener("click", function () {
    // Selecciona el contenedor izquierdo para ocultar su contenido
    const leftContainer = document.querySelector(".left");
    const rightContainer = document.querySelector(".right");

    // Oculta el contenido al hacer clic
  
        leftContainer.style.visibility = "hidden";
   
    
    rightContainer.style.visibility = "hidden";

    const curtain = document.getElementById('curtain');
    curtain.style.right = '0'; // Mueve la cortina hacia la izquierda

    // Después de que la cortina cubra la pantalla, redirigir a otra página
    setTimeout(function() {
        window.location.href = "nueva-pagina.html"; // Cambia la URL a la nueva página
    }, 1000);
});
*//*
document.getElementById("loginButton").addEventListener("click", function() {
    // Cambia el fondo del contenedor a completamente negro
    document.querySelector(".container").style.background = "#000";
    
    // Oculta el contenido de la sección izquierda después del clic
    document.querySelector(".left").style.display = "none";
});
*/
document.getElementById("loginButton").addEventListener("click", function() {
    // Agrega la clase para activar la transición de color
    const container = document.querySelector(".container");
    container.classList.add("bg-transition");
    const leftContainer = document.querySelector(".left");
    const rightContainer = document.querySelector(".right");
    leftContainer.style.visibility = "hidden";
    rightContainer.style.visibility = "hidden";
    // Opcional: Ocultar el contenido de la sección izquierda después de un breve tiempo
    setTimeout(function() {
       
        window.location.href = "nueva-pagina.html"; 
    }, 1000); // El mismo tiempo que la duración de la transición

});
