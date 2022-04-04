let i, j, k = 0;

function fecharPedido () {
    if (i+j+k === 3) {
        document.querySelector(".botao").classList.add("ativar");
        let texto = document.querySelector(".botao > h4");
        texto.innerHTML = "Finalizar pedido";
    }
}

function verde(opcaosel) {
    i = 1;

    let selecionado = document.querySelector(".salgados > .hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    let selecionar = document.querySelector("." + opcaosel)
    selecionar.classList.add("hide");

    fecharPedido()
}

function verdeSalgados(opcaosel) {
    i = 1;

    let selecionado = document.querySelector(".salgados > .hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    let selecionar = document.querySelector("." + opcaosel)
    selecionar.classList.add("hide");

    fecharPedido()
}

function verdeBebidas(opcaosel) {
    j = 1;

    let selecionado = document.querySelector(".bebidas > .hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    let selecionar = document.querySelector("." + opcaosel)
    selecionar.classList.add("hide");

    fecharPedido()
}

function verdeDoces(opcaosel) {
    k = 1;

    let selecionado = document.querySelector(".doces > .hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    let selecionar = document.querySelector("." + opcaosel)
    selecionar.classList.add("hide");

    fecharPedido()
}