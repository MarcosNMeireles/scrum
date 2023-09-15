const limparButton = document.getElementById("limparButton");
limparButton.addEventListener("click", limparCampos);

const calcularButton = document.getElementById("calcularButton");
calcularButton.addEventListener("click", calcularEExibir);

function calcularEExibir() {
  const c = parseFloat(document.getElementById("c").value);
  const v = parseFloat(document.getElementById("v").value);
  const c1 = parseFloat(document.getElementById("c1").value);
  const v1 = parseFloat(document.getElementById("v1").value);
  const c2 = parseFloat(document.getElementById("c2").value);

  const mathjaxContainer = document.getElementById("mathjax-container");
  const mathjaxContainer1 = document.getElementById("mathjax-container1");
  const mathjaxContainer2 = document.getElementById("mathjax-container2");
  const mathjaxContainer3 = document.getElementById("mathjax-container3");
  const mathjaxContainer4 = document.getElementById("mathjax-container4");

  let result1;
  let result2;
  let result3;
  let result4;
  let result5;

  result1 = c * v;
  result2 = c1 * v1;
  result3 = c2 - c1;
  result4 = result1 - result2;
  result5 = result4 / result3;

  // Atribua as equações aos elementos HTML usando MathJax.
  mathjaxContainer.innerHTML = `\\(${c} \\cdot ${v} = ${c1} \\cdot (${v1} - \\text{v2}) + ${c2} \\cdot \\text{v2}\\)`;
  mathjaxContainer1.innerHTML = `\\(${result1} = ${result2} + ${result3} \\cdot \\text{v2}\\)`;
  mathjaxContainer2.innerHTML = `\\(${result3} \\cdot \\text{v2} = ${result1} - ${result2} \\)`;
  mathjaxContainer3.innerHTML = `\\(\\text{v2} = \\frac{${result4}}{${result3}}\\)`;
  // Arredonda e formata o valor para 2 casas decimais
  const formattedResult5 = parseFloat(result5).toFixed(2);
  // Atualiza a equação MathJax com o valor formatado
  mathjaxContainer4.innerHTML = `\\(\\text{v2} = ${formattedResult5}\\)`;

  MathJax.typesetPromise([
    mathjaxContainer,
    mathjaxContainer1,
    mathjaxContainer2,
    mathjaxContainer3,
    mathjaxContainer4,
  ]).then(() => {
    console.log("Equações MathJax renderizadas com sucesso!");
  });

  const x = (c * v - c1 * v1) / (c2 - c1);

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `Valor de V2 - Volume da segunda solução: ${x.toFixed(2)} mL`;
}

function limparCampos() {
  document.getElementById("c").value = "";
  document.getElementById("v").value = "";
  document.getElementById("c1").value = "";
  document.getElementById("v1").value = "";
  document.getElementById("c2").value = "";
  document.getElementById("equationDisplay").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
