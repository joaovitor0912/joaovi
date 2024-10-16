//Variáveis bolinha
 
let xBolinha=150;
let yBolinha=210;
let diametro=35
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
 let velocidadeYBolinha = 6;

//Variáveis raquete
let xRaquete=5;
let yRaquete=150;

let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente =585
let yRaqueteOponente =150
let velocidadeYOponente;

let colidiu = false
  
//placar do jogo
let meuspontos = 0;
let  pontosDoOponente = 0;


function setup() {
  createCanvas(600, 400,);
}

function draw() {
  background(10,60,);
 mostraBolinha();
  movimentaBolinha();
 verificaColisaoBorda();
   mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaminhaRaquete();
  //verificaColisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  
  }

function mostraBolinha(){
 circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
        }
    if (yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
        }  verificaColisaoRaquete()
  
  }

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

 function movimentaminhaRaquete(){ 
   if (keyIsDown(UP_ARROW)){
     yRaquete -= 10;
}
   if (keyIsDown(DOWN_ARROW)){
     yRaquete += 10
   }   
                      }
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento
     && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    
    velocidadeXBolinha *= -1
  }
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
 }


 function movimentaRaqueteOponente(){ 
velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
   yRaqueteOponente += velocidadeYOponente

 }

function incluiPlacar(){
  fill(260);
  text(meuspontos,30,20);
  text(pontosDoOponente,566,20);
  
}
function marcaPonto(){
  if (xBolinha > 595){ 
    meusPontos += 1;
  }
  if(xBolinha < 15){ 
    pontosDoOponente += 1;
}
   }
