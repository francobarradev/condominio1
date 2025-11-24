const fechasArriendo = [  // Array con las fechas ya agendadas
    "6/12/2025",
    "7/12/2025",
    "13/12/2025",
    "14/12/2025",
    "20/12/2025",
    "21/12/2025"
];

function mostrarFechasArrendadas() { // Esta funcion muestra un popup con las fechas agendadas
    if (fechasArriendo.length === 0) {  //este if verifica si hay fechas agendadas
        alert("No hay fechas agendadas.");
        return;
    }
    let mensaje = "Fechas ya agendadas para la sede:\n\n"; //mensaje inicial
    fechasArriendo.forEach(fecha => {       // Recorremos el array de fechasArriendo
        mensaje += "• " + fecha + "\n";
    });
    alert(mensaje);  // Mostramos el mensaje en un popup
}

document.addEventListener("DOMContentLoaded", () => { //este listener espera a que el DOM este cargado
    const btnMostrarFechas = document.getElementById("mostrarFechasBtn");
    if (btnMostrarFechas) {
        btnMostrarFechas.addEventListener("click", mostrarFechasArrendadas);
    }
});
