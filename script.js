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

    let selecionado = document.querySelector(".hide");

    if(selecionado !== null){
        selecionado.classList.remove("hide");
    }
    
    let selecionar = document.querySelector("." + opcaosel)
    selecionar.classList.toggle("hide");

    fecharPedido()
}


