const elementInputCartaTexto = document.getElementById('carta-texto');
const elementButtonCriarCarta = document.getElementById('criar-carta');
const elementCartaGerada = document.getElementById('carta-gerada');
const elementGuardaPalavras = document.getElementById('guarda-palavras');
const elementCartaContador = document.getElementById('carta-contador');
let liberado = true;
let countWordsInCriarCarta = 0;

function addEventToButtonCriarCarta() {
  elementButtonCriarCarta.addEventListener('click', () => {
    verifyInput();
    if (liberado == true) {
      while (elementCartaGerada.firstChild) {
        elementCartaGerada.removeChild(elementCartaGerada.firstChild);
      }
      const arrayWordBySpace = (elementInputCartaTexto.value).split(' ');
      countWordsInCriarCarta = arrayWordBySpace.length;
      countWord();
      for (let i of arrayWordBySpace) {
        const createElementSpan = document.createElement('span');
        createElementSpan.innerText = i;
        elementCartaGerada.appendChild(createElementSpan);
      }
      classRandom();
    }

  });
}

addEventToButtonCriarCarta();

function verifyInput() {
  const valorInput = (elementInputCartaTexto.value);
  let contador = 0;
  for (let i of valorInput) {
    if (i === ' ') {
      contador += 1;
    }
  }
  if (contador !== valorInput.length) {
    liberado = true;
  } else {
    liberado = false;
    elementCartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function classRandom() {

  for (let i of elementCartaGerada.children) {
    const groupStyle = Math.floor(Math.random() * 3);
    const groupSize = Math.floor(Math.random() * 3);
    const groupRotate = Math.floor(Math.random() * 2);
    const groupInclination = Math.floor(Math.random() * 2);
    console.log('Style' + groupStyle + ' size' + groupSize + ' rotate' + groupRotate + ' inc' + groupInclination);
    if (groupStyle === 0) {
      i.classList.add('newspaper');
    } else if (groupStyle === 1) {
      i.classList.add('magazine1');
    } else if (groupStyle === 2) {
      i.classList.add('magazine2');
    }

    if (groupSize === 0) {
      i.classList.add('medium');
    } else if (groupSize === 1) {
      i.classList.add('big');
    } else if (groupSize === 2) {
      i.classList.add('reallybig');
    }

    if (groupRotate === 0) {
      i.classList.add('rotateleft');
    } else if (groupRotate === 1) {
      i.classList.add('rotateright');
    }

    if (groupInclination === 0) {
      i.classList.add('skewright');
    } else if (groupInclination === 1) {
      i.classList.add('skewleft');
    }
  }
}

function addEventToSpan() {
  elementCartaGerada.addEventListener('click', (event) => {
    let groupStyle = Math.floor(Math.random() * 3);
    let groupSize = Math.floor(Math.random() * 3);
    let groupRotate = Math.floor(Math.random() * 2);
    let groupInclination = Math.floor(Math.random() * 2);

    if (event.target.tagName === 'SPAN') {
      event.target.classList = '';

      if (groupStyle === 0) {
        event.target.classList.add('newspaper');
      } else if (groupStyle === 1) {
        event.target.classList.add('magazine1');
      } else if (groupStyle === 2) {
        event.target.classList.add('magazine');
      }

      if (groupSize === 0) {
        event.target.classList.add('medium');
      } else if (groupSize === 1) {
        event.target.classList.add('big');
      } else if (groupSize === 2) {
        event.target.classList.add('realybig');
      }

      if (groupRotate === 0) {
        event.target.classList.add('rotateleft');
      } else if (groupRotate === 1) {
        event.target.classList.add('rotateright');
      }

      if (groupInclination === 0) {
        event.target.classList.add('skewright');
      } else if (groupInclination === 1) {
        event.target.classList.add('skewleft');
      }
    }
  })
}
addEventToSpan();

function countWord() {
  elementCartaContador.innerText = countWordsInCriarCarta;
}
