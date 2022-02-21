palavras = ['alura','termo', 'porta', 'vasco', 'raios', 'balde', 'coisa', 'navio', 'turma', 'tempo', 'fruta', 'crise'];

palavraAleatoria = '';
var acertos = 0;
var erros = 0;
var letrasCorretas = [];
var letrasIncorretas = [];
var qtdSegredos = 0;
var libera = false;

var input = document.querySelector("#letra-digitada");

var botaoIniciar = document.querySelector("#iniciar");
botaoIniciar.addEventListener("click", function(){
    event.preventDefault();
    palavraAleatoria = '';
    acertos = 0;
    erros = 0;
    letrasCorretas = [];
    letrasIncorretas = [];
    qtdSegredos = 0;
    palavraAleatoria = sortearPalavra();
    botaoIniciar.textContent = "Reiniciar Jogo";
    desenhaTela();
    desenhaLinhas();
    libera = true;
    input.focus();
    return palavraAleatoria;
});

var palavraAdicionada = "";
var botaoAdicionar = document.querySelector("#nova-palavra");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    var palavraAdicionada = prompt("Infome sua palavra!");
    var novaPalavra = palavraAdicionada;
    palavras.push(novaPalavra);
});

function sortearPalavra() {
    var palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
    return palavraSorteada.toUpperCase();
}

var verificaLetra = document.querySelector("#verifica");
verificaLetra.addEventListener("click", function(){
    event.preventDefault();
    var segredos = palavraAleatoria.split('');
    qtdSegredos = segredos.length;
    var acertou = false;
    var letra = input.value.toUpperCase();
    if(input.value == "" && libera == true) {
        alert("Digite uma letra!")
        input.focus();
    } else {
        if (libera == true) {
            if (letrasCorretas.includes(letra) == false && letrasIncorretas.includes(letra) == false) {
                for(var posicao = 0; posicao < segredos.length; posicao++) {
                    if(letra == segredos[posicao]) {
                        letrasCorretas.push(letra);
                        escreverLetraCorreta(letra,posicao+1);
                        acertos++;
                        vitoria();
                        acertou = true;
                    }
                }
                    if(acertou == false) {
                        letrasIncorretas.push(letra);
                        escreverLetraErrada(letra,15);
                        erros++;
                        vitoria();
                    } 

                } else {
                    alert("Letra já digitada!")
                }

            input.value = "";
            input.focus();
        }
    }
});

function vitoria() {
    if (erros == 1){
        desenhaCabeca();
    }
    if (erros == 2){
        desenhaTronco();
    }
    if (erros == 3){
        desenhaBracoEsq();
    }
    if (erros == 4){
        desenhaBracoDir();
    }
    if (erros == 5){
        desenhaPernaEsq();
    }
    if (erros == 6) {
        desenhaPernaDir();
        escreverPerdeu();
    }
    if (acertos >= qtdSegredos) {
        escreverGanhou();
    }
}