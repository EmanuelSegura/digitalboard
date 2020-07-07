document.addEventListener("DOMContentLoaded", function(e) {

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    // Resizing 
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Variables
    let painting = false;

    function startPosition() {
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
    }

    function draw(e) {
        // si no estamos clickeando, no hace nada
        if (!painting) {
            return;
        }
        // tamaño y forma del pincel
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        // Dibujamos la linea en las posiciones del mouse
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        // Comienza una nueva ruta vaciando la lista de sub-rutas. 
        ctx.beginPath();
        // Me muevo a la posicion donde esta el mouse actualmente para evitar que dibuje cuando no lo indico
        ctx.moveTo(e.clientX, e.clientY)
    }

    //eventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

});