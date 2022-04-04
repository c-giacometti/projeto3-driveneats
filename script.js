let i, j, k = 0;

function fecharPedido () {
    if (i+j+k === 3) {
        document.querySelector(".botao").classList.add("ativar");
        let texto = document.querySelector(".botao > h4");
        texto.innerHTML = "Finalizar pedido";
    }
}

function verdeSalgados(opcaosel) {
    i = 1;

    let selecionado = document.querySelector(".salgados > .hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    opcaosel.classList.add("hide");

    let prato = opcaosel.querySelector("h4").innerHTML;
    let preçoSalgado = opcaosel.querySelector("span").innerHTML;

    preçoSalgado = Number(preçoSalgado).toFixed(2);

    fecharPedido()

    console.log(prato, preçoSalgado);
}

function verdeBebidas(opcaosel) {
    j = 1;

    let selecionado = document.querySelector(".bebidas > .hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    opcaosel.classList.add("hide");

    let bebida = opcaosel.querySelector("h4").innerHTML;
    let preçoBebida = opcaosel.querySelector("span").innerHTML;

    preçoBebida = Number(preçoBebida).toFixed(2);

    fecharPedido()

    console.log(bebida, preçoBebida);

}

function verdeDoces(opcaosel) {
    k = 1;

    let selecionado = document.querySelector(".doces > .hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    opcaosel.classList.add("hide");

    let sobremesa = opcaosel.querySelector("h4").innerHTML;
    let preçoSobremesa = opcaosel.querySelector("span").innerHTML;

    preçoSobremesa = Number(preçoSobremesa).toFixed(2);

    fecharPedido()

    console.log(sobremesa, preçoSobremesa);

}
