function calcular(operacao) { 
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);

    let resultado 
    if (operacao === "+") {
        resultado = numero1 + numero2;
    } else if (operacao === "-") { 
        resultado = numero1 - numero2;
    } else if (operacao === "*") { 
        resultado = numero1 * numero2;
    } else if (operacao === "/") { 
        resultado = numero1 / numero2;
    }
    document.getElementById('resultado').textContent = resultado;
}

function somar() { 
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);

    const resultado = numero1 + numero2;
    document.getElementById('resultado').textContent = resultado;
}

function subtrair() { 
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;

    const resultado = numero1 - numero2;
    document.getElementById('resultado').textContent = resultado;
}

function multiplicar() { 
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;

    const resultado = numero1 * numero2;
    document.getElementById('resultado').textContent = resultado;
}

function dividir() { 
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;

    const resultado = numero1 / numero2;
    document.getElementById('resultado').textContent = resultado;
}
