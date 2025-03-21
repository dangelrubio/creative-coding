const canvas = document.getElementById('canvas') // <- Se trae el canvas sobre el que vamos a trabajar
const ctx = canvas.getContext('2d') //<- Se estableven las dimensiones del canvas, en este caso, alto y ancho

//establecemos unas medidas para trabajar más fácil
canvas.width = 500
canvas.hegiht = 700

//se prepara la clase Cell y también la clase Effect

class Cell {
}

class Effect {
  constructor(canvas){
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
  }
}

//Se crea el efecto

const effect = new Effect(canvas)
