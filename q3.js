function gerarVolume(){
    const comp = document.querySelector("#comp");

    const alt = document.querySelector("#alt");

    const larg = document.querySelector("#larg");

    let comprimento = parseFloat(comp.value);
    let altura = parseFloat(alt.value);
    let largura = parseFloat(larg.value);
    let result = 0;

    result = comprimento * altura * largura;

    const vol = document.querySelector("#vol");
    vol.innerHTML = "O resultado é:           " + result.toFixed(2);

  
}

