
function calcular() {
    calcularClicado = true;
    checkInputs();

    // Exiba o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "block";
}

function checkInputs() {
    const volumeInput = document.getElementById("volume");
    const tempoInput = document.getElementById("tempo");
    const gotasInput = document.getElementById("gotas");
    const unidadeTempo = document.getElementById("unidadeTempo").value;
    const mensagem = document.getElementById("mensagem");
    const mathjaxContainer = document.getElementById("mathjax-container");
    const mathjaxContainer2 = document.getElementById("mathjax-container2");
    const mathjaxContainer3 = document.getElementById("mathjax-container3");
    const mathjaxContainer4 = document.getElementById("mathjax-container4");
    let resultadoGotas;
    let mensagemResultado;
    let resultadoTempo = 0;

    // Calculo para GOTAS
    if (volumeInput.value !== "" && tempoInput.value !== "") {
        gotasInput.disabled = true;

        if (
            !isNaN(parseFloat(volumeInput.value)) &&
            !isNaN(parseFloat(tempoInput.value))
        ) {
            if (unidadeTempo === "horas") {
                resultadoGotas =
                    parseFloat(volumeInput.value) /
                    (parseFloat(tempoInput.value) * 3);
                let taxa = parseFloat(tempoInput.value) * 3;

                mathjaxContainer.innerHTML = `\\( \\text{gotas} = \\frac{${volumeInput.value}}{${tempoInput.value} \\times 3} \\)`;
                mathjaxContainer2.innerHTML = `\\( \\text{gotas} = \\frac{${volumeInput.value}}{${taxa}} \\)`;

                MathJax.typesetPromise([
                    mathjaxContainer,
                    mathjaxContainer2,
                ]).then(() => {
                    console.log("Equações MathJax renderizadas com sucesso!");
                });
            } else if (unidadeTempo === "minutos") {
                resultadoGotas =
                    (parseFloat(volumeInput.value) * 20) /
                    parseFloat(tempoInput.value);

                let taxa = parseFloat(volumeInput.value) * 20;

                mathjaxContainer.innerHTML = `\\( \\text{gotas} = \\frac{${volumeInput.value} \\times 20}{${tempoInput.value}} \\)`;
                mathjaxContainer2.innerHTML = `\\( \\text{gotas} = \\frac{${taxa}}{${tempoInput.value}} \\)`;

                MathJax.typesetPromise([
                    mathjaxContainer,
                    mathjaxContainer2,
                ]).then(() => {
                    console.log("Equações MathJax renderizadas com sucesso!");
                });
            }

            const parteDecimal = resultadoGotas - Math.floor(resultadoGotas);

            if (parteDecimal > 0.4) {
                resultadoGotas = Math.ceil(resultadoGotas);
            } else {
                resultadoGotas = Math.floor(resultadoGotas);
            }

            mathjaxContainer3.innerHTML = `\\( \\text{gotas} = ${resultadoGotas.toFixed(
                2
            )} \\)`;

            MathJax.typesetPromise([mathjaxContainer3]).then(() => {
                console.log("Equação MathJax renderizada com sucesso!");
            });
        } else {
            mensagem.textContent = "";
        }
    }
    // Calculo para o TEMPO
    else if (volumeInput.value !== "" && gotasInput.value !== "") {
        tempoInput.disabled = true;

        if (
            !isNaN(parseFloat(volumeInput.value)) &&
            !isNaN(parseFloat(gotasInput.value))
        ) {
            let resultadoTempo;

            if (unidadeTempo === "horas") {
                resultadoTempo =
                    parseFloat(volumeInput.value) /
                    (parseFloat(gotasInput.value) * 3);

                let taxa =
                    parseFloat(volumeInput.value) / parseFloat(gotasInput.value);

                mathjaxContainer.innerHTML = `\\( ${gotasInput.value} = \\frac{${volumeInput.value}}{\\text{tempo} \\times 3} \\)`;
                mathjaxContainer4.innerHTML = `\\( \\text{tempo} \\times 3 = \\frac{${volumeInput.value}}{${gotasInput.value}} \\)`;
                mathjaxContainer2.innerHTML = `\\( \\text{tempo} = \\frac{${taxa}}{3} \\)`;

                MathJax.typesetPromise([
                    mathjaxContainer,
                    mathjaxContainer2,
                    mathjaxContainer4,
                ]).then(() => {
                    console.log("Equações MathJax renderizadas com sucesso!");
                });
            } else if (unidadeTempo === "minutos") {
                resultadoTempo =
                    (parseFloat(volumeInput.value) * 20) /
                    parseFloat(gotasInput.value);

                let taxa = parseFloat(volumeInput.value) * 20;

                mathjaxContainer.innerHTML = `\\( ${gotasInput.value} = \\frac{${volumeInput.value} \\times 20}{\\text{tempo}} \\)`;
                mathjaxContainer2.innerHTML = `\\( \\text{tempo} = \\frac{${taxa}}{${gotasInput.value}} \\)`;

                MathJax.typesetPromise([
                    mathjaxContainer,
                    mathjaxContainer2,
                ]).then(() => {
                    console.log("Equações MathJax renderizadas com sucesso!");
                });
            }

            const parteDecimal = resultadoTempo - Math.floor(resultadoTempo);
            if (parteDecimal > 0.4) {
                resultadoTempo = Math.ceil(resultadoTempo);
            } else {
                resultadoTempo = Math.floor(resultadoTempo);
            }

            mathjaxContainer3.innerHTML = `\\( \\text{tempo} = ${resultadoTempo.toFixed(
                2
            )} \\)`;

            MathJax.typesetPromise([mathjaxContainer3]).then(() => {
                console.log("Equação MathJax renderizada com sucesso!");
            });
        } else {
            mensagem.textContent = "";
        }
    }

    // Calculo para o VOLUME
    else if (tempoInput.value !== "" && gotasInput.value !== "") {
        volumeInput.disabled = true;

        if (
            !isNaN(parseFloat(tempoInput.value)) &&
            !isNaN(parseFloat(gotasInput.value))
        ) {
            let resultadoVolume = 0;
            
            //calculo em horas
            if (unidadeTempo === "horas") {
                resultadoVolume =
                    parseFloat(gotasInput.value) *
                    (parseFloat(tempoInput.value) * 3);

                let taxa = parseFloat(tempoInput.value) * 3;
                let resultadoFinal = 0

                mathjaxContainer.innerHTML = `\\( ${gotasInput.value} = \\frac{\\text{volume}}{${tempoInput.value} \\times 3} \\)`;
                mathjaxContainer4.innerHTML = `\\( \\text{volume} = ${gotasInput.value} \\cdot (${tempoInput.value} \\times 3) \\)`;
                mathjaxContainer2.innerHTML = `\\( \\text{volume} = ${gotasInput.value} \\cdot ${taxa} \\)`;
                
                MathJax.typesetPromise([
                    mathjaxContainer,
                    mathjaxContainer2,
                    mathjaxContainer4,
                ]).then(() => {
                    console.log("Equações MathJax renderizadas com sucesso!");
                });

                mathjaxContainer3.innerHTML = `\\( \\text{volume} = ${resultadoVolume.toFixed(
                    2
                )} \\)`;

                MathJax.typesetPromise([mathjaxContainer3]).then(() => {
                    console.log("Equação MathJax renderizada com sucesso!");
                });

            } else if (unidadeTempo === "minutos") {
                resultadoVolume =
                    (parseFloat(gotasInput.value) * parseFloat(tempoInput.value)) /
                    20;

                let taxa =
                    parseFloat(tempoInput.value) * parseFloat(gotasInput.value);

                mathjaxContainer.innerHTML = `\\( ${gotasInput.value} = \\frac{\\text{volume} \\times 20}{${tempoInput.value}} \\)`;
                mathjaxContainer4.innerHTML = `\\( {\\text{volume} \\times 20} = ${gotasInput.value} \\cdot ${tempoInput.value}  \\)`;
                mathjaxContainer2.innerHTML = `\\( \\text{volume} = \\frac{${taxa}}{20} \\)`;
                
                MathJax.typesetPromise([
                    mathjaxContainer,
                    mathjaxContainer2,
                    mathjaxContainer4,
                ]).then(() => {
                    console.log("Equações MathJax renderizadas com sucesso!");
                });

                mathjaxContainer3.innerHTML = `\\( \\text{volume} = ${resultadoVolume.toFixed(
                    2
                )} \\)`;

                MathJax.typesetPromise([mathjaxContainer3]).then(() => {
                    console.log("Equação MathJax renderizada com sucesso!");
                });
            }

            mensagem.textContent = mensagemResultado;
        } else {
            mensagem.textContent = "";
        }
    } else {
        volumeInput.disabled = false;
        tempoInput.disabled = false;
        gotasInput.disabled = false;
        mensagem.textContent = "";
    }
}

function resetForm() {
    const volumeInput = document.getElementById("volume");
    const tempoInput = document.getElementById("tempo");
    const gotasInput = document.getElementById("gotas");
    const mensagem = document.getElementById("mensagem");
    const mathjaxContainers = [
        document.getElementById("mathjax-container"),
        document.getElementById("mathjax-container2"),
        document.getElementById("mathjax-container3"),
        document.getElementById("mathjax-container4"),
    ];

    volumeInput.value = "";
    tempoInput.value = "";
    gotasInput.value = "";
    mensagem.textContent = "";

    volumeInput.disabled = false;
    tempoInput.disabled = false;
    gotasInput.disabled = false;

    mathjaxContainers.forEach((container) => {
        container.innerHTML = "";
    });

    MathJax.typesetPromise().then(() => {
        MathJax.typesetPromise(mathjaxContainers).then(() => {
            console.log("Equações MathJax renderizadas com sucesso!");
        });
    });
}
function limparPagina() {
    location.reload();
}