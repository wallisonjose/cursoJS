let entradaTarefa = document.querySelector('#entrada-tarefa');
let botaoAddTarefa = document.querySelector('#add-tarefa');
let saidaTarefa = document.querySelector('#lista-saida');
let tarefa;
let tarefaEbotao;
let codigoTarefa = 0


function addTarefa(){
    tarefa = entradaTarefa.value 
    console.log(tarefa)
    criarListaTarefa()
    entradaTarefa.value = ""
}

function criarListaTarefa(){
    let li = document.createElement('li')
    let excluir = criarButton('Excluir')
    li.innerHTML = `${tarefa}  `
    saidaTarefa.appendChild(li)
    li.appendChild(excluir)
    excluir.addEventListener('click', function(){
        excluir.parentElement.remove()
    })
}

function criarButton(nomeBotao){
    let button = document.createElement('button')
    button.innerHTML = nomeBotao
    return button
}






