document.getElementById("Encabezado").innerHTML = "ADIOS";

const naranja = document.getElementById("encabezado2");
naranja.style.color = "orange";

const marron = document.getElementById("encabezado2");
marron.addEventListener("click", function (){
    this.style.color = "brown";
});