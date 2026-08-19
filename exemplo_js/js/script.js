alert('Arquivo JS Carregado!');

function magica() { 
    const texto = "Xablau! mudou tudo!";
    let elemento = document.getElementById('texto');
    console.log(elemento);

    elemento.innerHTML = texto;
    elemento.style.fontSize = '69px';
    console.log(typeof elemento);
    console.log(typeof texto);
    console.log(elemento);
    let nome = "Astolfo";
    let idade = 67;
    console.log("O nome é " + nome + " e a idade é " + idade);
    console.log(`O nome é ${nome} e a idade é ${idade}`);
}