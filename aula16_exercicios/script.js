let resultado = []
let lista = document.getElementById('lista')
let res = document.getElementById('res')

function add() {
    let numero = document.getElementById('numero').value //o .value pega o valor do input(sendo sempre str, e precisando tranformar em number depois (pois precisa-se ver o length, e length só é possivel saber atraves de uma str))
    if (Number(numero) <=0 || Number(numero)>100 || numero.length == 0) { //se o usuário não digitar nada, digitar menor que 0 ou maior que 100
        window.alert('Por favor, digite um valor válido!')
    }

    else {
        if (resultado.indexOf(Number(numero)) == -1) { //se o valor digitado não for repetido o indexOf retorna -1 e add o valor na lista
            lista.innerHTML += `<option>Valor ${numero} adicionado.</option>`
            resultado.push(Number(numero)) //transforma o valor do input em numero para ser usado em uma conta e adiciona esse valor na lista resultado
        }
        else{
            window.alert('Insira um valor novo')
        }
    }

}

function resultados(){
    let soma = 0
    for (let s = 0; s < resultado.length; s++){
        soma += resultado[s]
    }

    let maior = 0
    for (let m = 0; ){
        maior = m
    }

    let media = soma/resultado.length

    res.innerHTML = `<p>Foram adicionados ${resultado.length} valores!</p>
    <p>A soma dos valores é: ${soma}</p>
    <p>O maior valor é </p>
    <p>O menor valor é </p>
    <p>A média dos valores é ${media}</p>
    `
    
}

