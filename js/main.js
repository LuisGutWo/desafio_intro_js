const elementName = document.querySelector("#name");
const elementColor = document.querySelector("#color");
const elementButton = document.querySelector("#button");
const elementResultado = document.querySelector("#resultado");

elementButton.addEventListener("click", () => {
    console.log("me diste click al boton");
    console.log(elementName.value);
    console.log(elementColor.value);

    elementResultado.textContent = elementName.value;
    elementResultado.style.color = elementColor.value;
});


