document.getElementById("botonEnviar").addEventListener("click", () => {
  fetch("http://localhost:3000/hola")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("inputRespuesta").value = data;
    })
    .catch((error) => console.error("Error:", error));
});