const elementListaTarefas = document.getElementById('lista-tarefas');
const elementButtonCriarTarefa = document.getElementById('criar-tarefa');
const elementInputTextoTarefa = document.getElementById('texto-tarefa');
const elementButtonApagaTudo = document.getElementById('apaga-tudo');
const elementButtonRemoverFinalizados = document.getElementById('remover-finalizados');
const elementButtonSalvarTarefas = document.getElementById('salvar-tarefas');
const elementButtonMoverCima = document.getElementById('mover-cima');
const elementButtonMoverBaixo = document.getElementById('mover-baixo');
const elementButtonRemoverSelecionado = document.getElementById('remover-selecionado');
let elementSelected = document.getElementsByClassName('selected')[0];

function addEventToCriarTarefa() {
  elementButtonCriarTarefa.addEventListener('click', () => {

    let valueInputTextoTarefa = elementInputTextoTarefa.value;

    if (valueInputTextoTarefa.length !== 0) {
      const createElementLi = document.createElement('li');
      createElementLi.innerText = valueInputTextoTarefa;
      elementListaTarefas.appendChild(createElementLi);
      elementInputTextoTarefa.value = '';
    }
  });
}
addEventToCriarTarefa();

function addEventToUlLi() {
  elementListaTarefas.addEventListener('click', (evento) => {
    let listaTarefasChildren = elementListaTarefas.children;

    if (evento.target.nodeName === 'LI') {
      let valueClassEvento = evento.target.classList.value;

      if (!valueClassEvento.includes('selected')) {
        evento.target.classList.add('selected');

        for (let index = 0; index < elementListaTarefas.children.length; index += 1) {
          let valueClassesNEvento = listaTarefasChildren[index].classList.value;

          if (listaTarefasChildren[index] != evento.target && valueClassesNEvento.includes('selected')) {
            listaTarefasChildren[index].classList.remove('selected');
          }
        }
        
      } else {
        evento.target.classList.remove('selected');
      }


    }

  })
}
addEventToUlLi();


function addAnotherEventToUlLi() {
  elementListaTarefas.addEventListener('dblclick', (evento1) => {



    if (evento1.target.nodeName === 'LI') {
      let valueClassesEvento1 = evento1.target.classList.value;

      if (!valueClassesEvento1.includes('completed')) {
        console.log('1')
        evento1.target.classList.add('completed');
      } else {
        evento1.target.classList.remove('completed')
      }

    }
  })
}

addAnotherEventToUlLi();


function addEventToApagaTudo() {
  elementButtonApagaTudo.addEventListener('click', () => {
    let listaLength = elementListaTarefas.childNodes.length;

    for (let index = 0; index < listaLength; index += 1) {
      let lastChild = elementListaTarefas.lastChild;
      elementListaTarefas.removeChild(lastChild);
    }
  })
}
addEventToApagaTudo()

function addEventToRemoverFinalizados() {
  elementButtonRemoverFinalizados.addEventListener('click', () => {
    let listaLength = elementListaTarefas.children.length;
    console.log(listaLength);
    for (let index = listaLength - 1; index >= 0; index -= 1) {

      let valueClassesIndex1 = elementListaTarefas.children[index].classList.value;
      let thisChild = elementListaTarefas.children[index];
      if (valueClassesIndex1.includes('completed')) {
        elementListaTarefas.removeChild(thisChild);
      }

    }
  })
}
addEventToRemoverFinalizados();


function addEvenToSalvarTarefas() {
  elementButtonSalvarTarefas.addEventListener('click', () => {
    let listaTarefasLength = elementListaTarefas.children.length;
    let arrayDeInnerTexts = [];
    let arrayDeClassesSelected = [];
    let arrayDeClassesCompleted = [];
    localStorage.setItem('filhos', listaTarefasLength);

    for (let index = 0; index < elementListaTarefas.children.length; index += 1) {
      arrayDeInnerTexts.push(elementListaTarefas.children[index].innerText);

      let containClassListOfElementIndex = elementListaTarefas.children[index].classList.value;
      console.log(typeof (containClassListOfElementIndex));


      if (containClassListOfElementIndex.includes('completed')) {
        arrayDeClassesCompleted.push(1);
      } else {
        arrayDeClassesCompleted.push(0);
      }
    }
    localStorage.setItem('innerTexts', arrayDeInnerTexts);
    localStorage.setItem('containClassCompleted', arrayDeClassesCompleted);
  })
}


addEvenToSalvarTarefas();



function loadSave() {
  console.log(localStorage.getItem('innerTexts'));
  console.log(localStorage.getItem('filhos'));

  if (localStorage.getItem('filhos') !== null) {
    let howManySaves = localStorage.getItem('filhos')

    for (let index = 0; index < howManySaves; index += 1) {
      let createElementLi = document.createElement('li');
      elementListaTarefas.appendChild(createElementLi);

    }
    if (localStorage.getItem('innerTexts') !== null) {
      let getArrayOfInnerTexts = (localStorage.getItem('innerTexts')).split(',')
      console.log(getArrayOfInnerTexts);

      for (let index = 0; index < howManySaves; index += 1) {
        elementListaTarefas.children[index].innerText = getArrayOfInnerTexts[index];
      }
    }
    if (localStorage.getItem('containClassCompleted') !== null) {
      let arrayContainClassCompleted = (localStorage.getItem('containClassCompleted')).split(',');
      for (let index = 0; index < howManySaves; index += 1) {
        if (arrayContainClassCompleted[index] == 1) {
          console.log('está passando também')
          elementListaTarefas.children[index].classList.add('completed');
        }
      }
    }
  }

}
loadSave();

function addEventToMoverCima() {
  elementButtonMoverCima.addEventListener('click', () => {
    if (document.getElementsByClassName('selected')[0] != undefined) {

      if (document.getElementsByClassName('selected')[0] != elementListaTarefas.firstChild) {
        elementSelected = document.querySelector('.selected');
        let previousElement = elementSelected.previousElementSibling;
        elementListaTarefas.insertBefore(elementSelected, previousElement);
      }
    }
  })
}
addEventToMoverCima();

function addEventToMoverBaixo() {
  elementButtonMoverBaixo.addEventListener('click', () => {

    if (document.getElementsByClassName('selected')[0] != undefined) {
      elementSelected = document.querySelector('.selected');
      const nextElement = elementSelected.nextSibling;
      if (elementSelected != elementListaTarefas.lastChild) {
        elementListaTarefas.replaceChild(elementSelected, nextElement);
        elementListaTarefas.insertBefore(nextElement, elementSelected)
        console.log("kkk")
      }
    }
  })
}
addEventToMoverBaixo();


function addEventToRemoverSelecionado() {
  elementButtonRemoverSelecionado.addEventListener('click', () => {

    elementSelected = document.getElementsByClassName('selected')[0];
    if (elementSelected !== undefined) {
      elementListaTarefas.removeChild(elementSelected);
      console.log("está passando aqui")
    }
  })
}

addEventToRemoverSelecionado();