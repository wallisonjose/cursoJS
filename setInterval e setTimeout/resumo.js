/*
O setInterval permite que uma função seja executada periodicamente de acordo
com um período de tempo pré definido na chamada desse comando
*/

let exibirTeste= () => console.log('teste')
setInterval( exibirTeste, 1000 )

/*
No exemplo de cima a cada 1 segundo (1000 milisegundos), será exibido no console
a palavra teste 
*/

/*
O setTimeout permite que uma função seja executada após um determinado período de tempo o qual foi determinado na chamada do comando
*/

let exibirMensagem = () => console.log('Passaram 2 segundos')
setTimeout(exibirMensagem, 2000)

/*
No exemplo acima, a mensagem é exibida após passarem 2 segundos
*/

/*
É valido dizer que o setInterval ocorre ininterruptamente e há uma forma de parar ele, para isso podemos usar o comando clearInterval(x) sendo x a variável que 
recebe o setInterval
*/

let funcaoInicio = () => console.log('Mensagem')
let x = setInterval(funcaoInicio, 1000)
let funcaoDeParada = () => clearInterval(x)
setTimeout(funcaoDeParada, 6000)

/*
Nesse exemplo a mensagem será exibida a cada segundo por 5 vezez, pois ap´pos 6 
segundos a função de parada será chamada
*/
