//variables 
const precio = 380000
const button = document.querySelector("#button")
const cantidad = document.querySelector("#cantidad")
const color = document.querySelector("#color")

//styles 
totalPrecio.textContent = "Total:      "
totalCantidad.textContent = "Cantidad:    "

//listeners
button.addEventListener("click", () => {
    totalPrecio.textContent = `Total: ${Number(cantidad.value) * Number(precio)} `;
    totalCantidad.textContent = `Cantidad: ${cantidad.value}`;
    colorResult.style.backgroundColor = color.value;

})

