let i, j, k = 0;
let preçoPrato, preçoBebida, preçoSobremesa = 0;

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

    prato = opcaosel.querySelector("h4").innerHTML;
    preçoPrato = opcaosel.querySelector("span").innerHTML;

    preçoPrato = Number(preçoPrato);

    fecharPedido()

    console.log(prato, preçoPrato);

}

function verdeBebidas(opcaosel) {
    j = 1;

    let selecionado = document.querySelector(".bebidas > .hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    opcaosel.classList.add("hide");

    bebida = opcaosel.querySelector("h4").innerHTML;
    preçoBebida = opcaosel.querySelector("span").innerHTML;

    preçoBebida = Number(preçoBebida);

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

    sobremesa = opcaosel.querySelector("h4").innerHTML;
    preçoSobremesa = opcaosel.querySelector("span").innerHTML;

    preçoSobremesa = Number(preçoSobremesa);

    fecharPedido()

    console.log(sobremesa, preçoSobremesa);

}

function finalizar () {
    let preçoFinal = preçoPrato + preçoBebida + preçoSobremesa;
    preçoFinal = preçoFinal.toFixed(2);

    let strMsg = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${preçoFinal}`

    strMsg = encodeURIComponent(strMsg);

    window.open("https://wa.me/55019991003787?text="+strMsg);

    console.log(strMsg);
}