const elementOptions = document.getElementById('options');
const elementOptionsChildren = document.getElementById('options').children;
const elementAnswer = document.getElementById('answer');
const elementRGBColor = document.getElementById('rgb-color');
const elementButtonReset = document.getElementById('reset-game');
const elementScore = document.getElementById('score');

function changesRGB(){
    console.log('oi');
    let redValueRandom = Math.floor((Math.random()) * 256);
    let greenValueRandom = Math.floor((Math.random()) * 256);
    let blueValueRandom = Math.floor((Math.random()) * 256);
    elementRGBColor.innerText = 'rgb(' + redValueRandom + ', ' + greenValueRandom + ', ' + blueValueRandom + ')';
}

function putColorsOnBalls() {
  for (let i of elementOptionsChildren) {
    let redValueRandom = Math.floor((Math.random()) * 256);
    let greenValueRandom = Math.floor((Math.random()) * 256);
    let blueValueRandom = Math.floor((Math.random()) * 256);

    i.style.backgroundColor = 'rgb(' + redValueRandom + ', ' + greenValueRandom + ', ' + blueValueRandom + ')';

  }
  let numberRandom = Math.floor((Math.random() * 6))
  let ballAnswer = elementOptionsChildren[numberRandom];
  console.log(ballAnswer);
  console.log(elementRGBColor.innerText)
  ballAnswer.style.backgroundColor = elementRGBColor.innerText;
}
putColorsOnBalls();

function addEventToBalls() {
  elementOptions.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      if (event.target.style.backgroundColor == elementRGBColor.innerText) {
        elementAnswer.innerText = 'Acertou!';
        elementScore.innerText = parseInt(elementScore.innerText) + 3; 
        changesRGB();
        putColorsOnBalls();
      } else {
        elementAnswer.innerText = 'Errou! Tente novamente';
      }
    }
  })
}
addEventToBalls();

function addEventToButtonReset(){
    elementButtonReset.addEventListener('click', ()=>{
        changesRGB();
        putColorsOnBalls();
        elementAnswer.innerText = 'Escolha uma cor:'
        
    })
}
addEventToButtonReset();
