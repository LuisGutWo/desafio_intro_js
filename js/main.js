const elementCantidad = document.querySelector("#cantidad");
const elementColor = document.querySelector("#color");
const elementButton = document.querySelector("#button");
const elementPrecio = document.querySelector("#precio");

elementButton.addEventListener("click", () => {
    console.log("me diste click al boton");
    console.log(elementCantidad.value);
    console.log(elementColor.value);
    console.log(elementPrecio.value);

    elementPrecio.textContent = elementCantidad.value;
    elementPrecio.style.color = elementColor.value;
});


