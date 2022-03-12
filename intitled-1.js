// [Background]

const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: cvs.height - 204,
  desenha() {
    ctx.fillStyle = '#70c5ce'
    ctx.fillRect(0, 0, cvs.width, cvs.heigth)

    ctx.drawImage(
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
  }
}
