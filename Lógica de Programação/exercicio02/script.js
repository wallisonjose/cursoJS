let altura = prompt('Digite a altura da imagem: ')
let largura = prompt('Digite a largura da imagem: ')

altura = Number(altura)
largura = Number(largura)

// Função ternária para lógicas simples de true or false

/*    FUNÇÃO DE FORMA VERBOSA
function ePaisagem (largura, altura) {
    return largura > altura ? console.log(true) : console.log(false)
}
*/

// FUNÇÃO EM FORMA DE ARROW FUNCTION

const ePaisagem = (largura, altura) => largura > altura ? console.log(true) : console.log(false)


function dispararAcao(){
    ePaisagem(largura, altura)
}