const botoes= document.querySelectorAll("button");

        botoes.forEach(function(botao) {
            let curtiu = false;
            botao.addEventListener("click", botaoClicado);
        function botaoClicado() {
        console.log("fui clicado");
        let texto= botao.querySelector("span");
            if (curtiu === false) {
        texto.textContent++;
        }
        }
        });

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventListener("click", mudaTema);
function mudaTema(){
        const corpoPagina = documento.body;
        if(corpoPagina.classList.contains("tema-escuro")) {
                corpoPagina.classList.remove ("tema-escura");
        } else {
                corpoPagina.classList.add("tema-escuro");
        }
}
