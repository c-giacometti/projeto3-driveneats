let i, j, k = 0;
let preçoFinal, preçoPrato, preçoBebida, preçoSobremesa = 0;

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

}

function confirmar () {

    let preçoFinal = preçoPrato + preçoBebida + preçoSobremesa;

    document.querySelector(".driveneats").classList.add("fade");
    document.querySelector(".confirma").classList.add("aparecer");

    document.querySelector(".prato > h5").innerHTML = prato;
    document.querySelector(".prato > h6").innerHTML = preçoPrato.toFixed(2);
    document.querySelector(".bebida > h5").innerHTML = bebida;
    document.querySelector(".bebida > h6").innerHTML = preçoBebida.toFixed(2);
    document.querySelector(".sobremesa > h5").innerHTML = sobremesa;
    document.querySelector(".sobremesa > h6").innerHTML = preçoSobremesa.toFixed(2);
    document.querySelector(".total > h6").innerHTML = preçoFinal.toFixed(2);
}

function finalizar () {

    let nome = prompt("Qual o seu nome?");
    let endereço = prompt("Qual o seu endereço? (Rua e número)");

    preçoFinal = preçoPrato + preçoBebida + preçoSobremesa;
    preçoFinal = preçoFinal.toFixed(2);

    let strMsg = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${preçoFinal}
    
    nome: ${nome}
    endereço: ${endereço}`

    strMsg = encodeURIComponent(strMsg);

    window.open("https://wa.me/55019991003787?text="+strMsg);

}

function cancelar () {
    document.querySelector(".aparecer").classList.remove("aparecer");
    document.querySelector(".fade").classList.remove("fade");
}