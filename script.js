console.log("Hello, World");

const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalculo");
const result = document.querySelector("#result");

function btnOnClick() {
  const suma = parseInt(input1.value) + parseInt(input2.value);
  result.innerText = "Resultado: " + suma;
}
