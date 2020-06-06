document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementsByClassName("grid")
    let squares = Array.from(grid.querySelectorAll("div"))
    const width = 10
    const height = 20
    let currentPosition = 4;


    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
      ]

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
      ]

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
      ]

      const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
      ]
const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

//randomizes the tetrominos
let random = Math.floor(math.random()*theTetrominos.length)
let currentRotation = 0;
let current = theTetrominos[random][current]

//this moves the tetrominos

function draw() {
    current.forEach( index => {
        squares[currentPosition+index].classList.add("block")
        squares[currentPosition+index].style.backgroundImage = colors[random]
    })
}

function undraw() {
    current.forEach( index => {
        squares[currentPosition+index].classList.remove("block")
    })
}

function moveDown () {
    undraw()
    currentPosition = currentPosition += width;
    draw()
    freeze()
}

//move left and prevent collisions with shapes moving left

function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
}



})