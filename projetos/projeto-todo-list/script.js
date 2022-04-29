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

function addEventToCreateTask() {
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
addEventToCreateTask();

function addEventToUlLiSelected() {
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
addEventToUlLiSelected();


function addAnotherEventToUlLiCompleted() {

  elementListaTarefas.addEventListener('dblclick', (evento1) => {

    if (evento1.target.nodeName === 'LI') {
      const valueClassesEvento1 = evento1.target.classList.value;

      if (!valueClassesEvento1.includes('completed')) {
        evento1.target.classList.add('completed');
      } else {
        evento1.target.classList.remove('completed')
      }
    }
  })
}

addAnotherEventToUlLiCompleted();


function addEventToApagaTudo() {
  elementButtonApagaTudo.addEventListener('click', () => {
    while (elementListaTarefas.firstChild) {
      elementListaTarefas.removeChild(elementListaTarefas.firstChild);
    }
  })
}
addEventToApagaTudo()

function addEventToRemoverFinalizados() {
  elementButtonRemoverFinalizados.addEventListener('click', () => {
    const listaLength = elementListaTarefas.children.length;
    for (let index = listaLength - 1; index >= 0; index -= 1) {

      const valueClassesIndex1 = elementListaTarefas.children[index].classList.value;
      const thisChild = elementListaTarefas.children[index];
      if (valueClassesIndex1.includes('completed')) {
        elementListaTarefas.removeChild(thisChild);
      }
    }
  })
}
addEventToRemoverFinalizados();


function addEvenToSalvarTarefas() {
  elementButtonSalvarTarefas.addEventListener('click', () => {
    const listaTarefasLength = elementListaTarefas.children.length;
    let arrayDeInnerTexts = [];
    let arrayDeClassesCompleted = [];
    localStorage.setItem('filhos', listaTarefasLength);

    for (let index = 0; index < elementListaTarefas.children.length; index += 1) {
      arrayDeInnerTexts.push(elementListaTarefas.children[index].innerText);

      const containClassListOfElementIndex = elementListaTarefas.children[index].classList.value;

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

    const howManySaves = localStorage.getItem('filhos')
    const getArrayOfInnerTexts = (localStorage.getItem('innerTexts')).split(',');
    const arrayContainClassCompleted = (localStorage.getItem('containClassCompleted')).split(',');

    for (let index = 0; index < howManySaves; index += 1) {

      let createElementLi = document.createElement('li');
      createElementLi.innerText = getArrayOfInnerTexts[index];
      console.log(arrayContainClassCompleted[index]);
      if (arrayContainClassCompleted[index] === '1') {
        createElementLi.classList.add('completed');
      }
      elementListaTarefas.appendChild(createElementLi);

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
    elementSelected = document.querySelector('.selected');
    if (elementSelected !== undefined) {

      const nextElement = elementSelected.nextSibling;
      if (elementSelected !== elementListaTarefas.lastChild) {
        elementListaTarefas.insertBefore(nextElement, elementSelected);
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

    }
  })
}

addEventToRemoverSelecionado();