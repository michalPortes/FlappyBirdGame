console.log('Flappy Bird')

const sprites = new Image()
sprites.src = './sprites.png'

const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')

//telaDeInicio

const telaDeInicio = {
  sX: 134,
  sY: 0,
  w: 174,
  h: 152,
  x: canvas.width / 2 - 174 / 2,
  y: 50,
  desenha() {
    contexto.drawImage(
      sprites,
      telaDeInicio.sX,
      telaDeInicio.sY,
      telaDeInicio.w,
      telaDeInicio.h,
      telaDeInicio.x,
      telaDeInicio.y,
      telaDeInicio.w,
      telaDeInicio.h
    )
  }
}

// [Background]

const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = '#70c5ce'
    contexto.fillRect(0, 0, canvas.width, canvas.height)

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX,
      planoDeFundo.spriteY,
      planoDeFundo.largura,
      planoDeFundo.altura,
      planoDeFundo.x,
      planoDeFundo.y,
      planoDeFundo.largura,
      planoDeFundo.altura
    )
    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX,
      planoDeFundo.spriteY,
      planoDeFundo.largura,
      planoDeFundo.altura,
      planoDeFundo.x + planoDeFundo.largura,
      planoDeFundo.y,
      planoDeFundo.largura,
      planoDeFundo.altura
    )
  }
}

//[chao]
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites,
      chao.spriteX,
      chao.spriteY,
      chao.largura,
      chao.altura,
      chao.x,
      chao.y,
      chao.largura,
      chao.altura
    )
    contexto.drawImage(
      sprites,
      chao.spriteX,
      chao.spriteY,
      chao.largura,
      chao.altura,
      chao.x + chao.largura,
      chao.y,
      chao.largura,
      chao.altura
    )
  }
}
const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  gravidade: 0.25,
  velocidade: 0,

  atualiza() {
    flappyBird.velocidade += flappyBird.gravidade
    flappyBird.y += flappyBird.velocidade
  },

  desenha() {
    contexto.drawImage(
      sprites,
      flappyBird.spriteX,
      flappyBird.spriteY,
      flappyBird.largura,
      flappyBird.altura,
      flappyBird.x,
      flappyBird.y,
      flappyBird.largura,
      flappyBird.altura
    )
  }
}
//
//[telas]
//
let TelaAtiva = {}
function mudaParaTela(novaTela) {
  TelaAtiva = novaTela
}
const Telas = {
  inicio: {
    desenha() {
      planoDeFundo.desenha()
      chao.desenha()
      flappyBird.desenha()
      telaDeInicio.desenha()
    },
    click() {
      mudaParaTela(Telas.Jogo)
    },
    atualiza() {}
  }
}
Telas.Jogo = {
  desenha() {
    planoDeFundo.desenha()
    chao.desenha()
    flappyBird.desenha()
  },
  atualiza() {
    flappyBird.atualiza()
  }
}
function loop() {
  // A sequência que eu coloco as minhas funções imnterfere no que vai aparecer primeiro no jogo

  TelaAtiva.desenha()
  TelaAtiva.atualiza()
  requestAnimationFrame(loop)
}

window.addEventListener('click', function () {
  if (TelaAtiva.click) {
    TelaAtiva.click()
  }
})
mudaParaTela(Telas.inicio)
loop()
