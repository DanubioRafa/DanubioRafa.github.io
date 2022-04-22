let elementPixelBoard = document.getElementById("pixel-board");
let elementCorPreta = document.getElementById("cor1");
elementCorPreta.classList.add("selected")
let elementCor2 = document.getElementById("cor2");
let elementCor3 = document.getElementById("cor3");
let elementCor4 = document.getElementById("cor4");
let elementColorPalette = document.getElementById("color-palette");
elementColorPalette.addEventListener("click", selectColor);
let elementButtonClear = document.getElementById("clear-board");
elementButtonClear.addEventListener("click", clearBoard);
let elementInputBoardSize = document.getElementById("board-size");

let boardSize = 5;

let cor1Active = true;
let cor2Active = false;
let cor3Active = false;
let cor4Active = false;

function paletteColors() {
  elementCorPreta.style.backgroundColor = "black";
  elementCor2.style.backgroundColor = "#05F2DB";
  elementCor3.style.backgroundColor = "#025940";
  elementCor4.style.background = "#01261C";
}
paletteColors()

function drawPixels() {

  for (let index = 0; index < boardSize; index += 1) {
    console.log("0")
    for (let index1 = 1; index1 < (boardSize + 1); index1 += 1) {
      let createElementPixel = document.createElement("div");
      createElementPixel.classList.add("pixel")
      createElementPixel.addEventListener("click", paintPixel);
      console.log("1")
      elementPixelBoard.children[index].appendChild(createElementPixel);

    }

  }
}
drawPixels();

function selectColor(event) {
  let elementChildrenPalette = document.getElementById("color-palette").children;
  for (let index = 0; index < elementChildrenPalette.length; index += 1) {
    if (elementChildrenPalette[index].isEqualNode(event.target)) {
      event.target.classList.add("selected");
    } else {
      elementChildrenPalette[index].classList.remove("selected");
    }
  }

}


function paintPixel(event) {
  let elementTarget = event.target;
  let elementSelected = document.getElementsByClassName("selected")[0].style.backgroundColor;
  elementTarget.style.backgroundColor = elementSelected;
}


function clearBoard() {
  let elementPixel = document.getElementsByClassName("pixel");
  for (let index = 0; index < elementPixel.length; index += 1) {
    elementPixel[index].style.backgroundColor = "white";
  }

}


let elementButtonGenerate = document.getElementById("generate-board")
elementButtonGenerate.addEventListener("click", newSizeBoard);
console.log("esse é o valor velho" + boardSize)

function newSizeBoard() {
  let newValue = elementInputBoardSize.value;
  if (newValue.length === 0) {
    window.alert("Board Inválido!")
  } else {

    if (newValue < 5) {
      newValue = 5;
    } else if (newValue > 50) {
      newValue = 50
    }
    for (let index = 0; index < boardSize; index += 1) {
      for (let index1 = 1; index1 < (boardSize + 1); index1 += 1) {

        let pixelBoardChilds = elementPixelBoard.children[index];
        let childs = pixelBoardChilds.firstChild;
        pixelBoardChilds.removeChild(childs);
      }

    }

    boardSize = parseInt(newValue);
    console.log("esse é o novo valor" + newValue);
    console.log("esse é o valor board" + boardSize);



    newDrawPixels();
  }
}

function newDrawPixels() {

  for (let index = 0; index < boardSize; index += 1) {
    if (index > 4) {
      let createElementLine = document.createElement("div");
      createElementLine.classList.add("line")
      elementPixelBoard.appendChild(createElementLine);
    }
    console.log("0")
    for (let index1 = 1; index1 < (boardSize + 1); index1 += 1) {
      let createElementPixel = document.createElement("div");
      createElementPixel.classList.add("pixel")
      createElementPixel.addEventListener("click", paintPixel);
      console.log("1")
      elementPixelBoard.children[index].appendChild(createElementPixel);

    }

  }
}

function randomColors() {
  let colorRandom1 = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
  let colorRandom2 = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
  let colorRandom3 = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
  elementCor2.style.backgroundColor = colorRandom1;
  elementCor3.style.backgroundColor = colorRandom2;
  elementCor4.style.background = colorRandom3;
}
randomColors();
