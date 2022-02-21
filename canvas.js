var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');


function desenhaTela() {
	pincel.fillStyle = "#FEFEFE";
	pincel.fillRect(0, 0, 1200, 600);
	pincel.font = '40px arial';
	pincel.fillStyle = 'red';
	pincel.fillText('LETRAS ERRADAS: ', 650, 115);
	pincel.strokeStyle = 'brown';
	pincel.lineWidth = 5;
	pincel.beginPath();
	pincel.moveTo(100,47);
	pincel.lineTo(100,430);
	pincel.moveTo(100,50);
	pincel.lineTo(280,50);
	pincel.lineTo(280,125);
	pincel.moveTo(100,150);
	pincel.lineTo(200,50);
	pincel.stroke();
}

function desenhaLinhas(palavraSorteada){
    var separa = palavraAleatoria.split('');
    qtdelinhas = separa.length;
    var x = 50;
    var x2 = 100;
    for (var i=0;i < qtdelinhas; i++){
        pincel.strokeStyle = 'black';
        pincel.beginPath();
        pincel.moveTo(x,480);
        pincel.lineTo(x2,480);
        x = x + 70;
        x2 = x2 + 70;        
        pincel.stroke();
    }
}

function escreverLetraCorreta(letra,pos){
    pincel.beginPath();
    pincel.font = '40px arial';
    pincel.fillStyle = 'green';
    pincel.fillText(letra, 68*pos, 475);
    pincel.closePath();
}

function escreverLetraErrada(letra,pos){
    var qtdeerradas = letrasIncorretas.length;
    pincel.beginPath();
    pincel.fillStyle = 'red';
    pincel.strokeStyle = 'black';
    pincel.font = '45 arial';
    pincel.strokeText(letra, 650+(qtdeerradas*40), 165);
    pincel.fillText(letra, 650+(qtdeerradas*40), 165);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
}

function desenhaCabeca(){
    pincel.beginPath();
    pincel.fillStyle = 'yellow';
    pincel.lineWidth = 6;
    pincel.arc(280,150,30,0,2*Math.PI);
    pincel.strokeStyle = 'orange';
    pincel.stroke();
    pincel.fill();
    pincel.closePath();    
}

function desenhaTronco(){
    pincel.beginPath();
    pincel.fillStyle = 'yellow';
    pincel.strokeStyle = 'orange';
    pincel.lineWidth = 6;
    pincel.moveTo(280,180);
    pincel.lineTo(280,300);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
}

function desenhaBracoEsq(){
   	pincel.beginPath();
    pincel.fillStyle = 'yellow';
    pincel.strokeStyle = 'orange';
    pincel.lineWidth = 6;
    pincel.moveTo(280,190);
    pincel.lineTo(250,290);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
}

function desenhaBracoDir(){
   	pincel.beginPath();
    pincel.fillStyle = 'yellow';
    pincel.strokeStyle = 'orange';
    pincel.lineWidth = 6;
    pincel.moveTo(280,190);
    pincel.lineTo(310,290);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
}

function desenhaPernaEsq(){
    pincel.beginPath();
    pincel.fillStyle = 'yellow';
    pincel.strokeStyle = 'orange';
    pincel.lineWidth = 6;
    pincel.moveTo(280,300);
    pincel.lineTo(250,420);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
}

function desenhaPernaDir(){
    pincel.beginPath();
    pincel.fillStyle = 'yellow';
    pincel.strokeStyle = 'orange';
    pincel.lineWidth = 6;
    pincel.moveTo(280,300);
    pincel.lineTo(310,420);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
}

function escreverPerdeu(){
    pincel.beginPath();
    pincel.font = '100px arial';
    pincel.fillStyle = 'red';
    pincel.strokeStyle = "black";
    pincel.fillText('VOCÊ PERDEU!', 300, 300);
    pincel.strokeText('VOCÊ PERDEU!', 300, 300);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    libera = false;
}

function escreverGanhou(){
    pincel.beginPath();
    pincel.font = '100px arial';
    pincel.fillStyle = 'green';
    pincel.strokeStyle = "black";
    pincel.fillText('VOCÊ GANHOU!', 300, 300);
    pincel.strokeText('VOCÊ GANHOU!', 300, 300);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    libera = false;
}
