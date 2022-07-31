
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
            //lista.innerHTML += `<option>Valor ${numero} adicionado.</option>` jeito de gambiarra de add os valores no select (o user pode escrever uma tag html no input)
            let item = document.createElement('option') //cria um elemento do tipo <option> dentro do select
            item.text = `Valor ${numero} adicionado.` //adiciona um texto a variavel item que está dentro de um option no select
            resultado.push(Number(numero)) //transforma o valor do input em numero para ser usado em uma conta e adiciona esse valor na lista resultado
            lista.appendChild(item)
            res.innerHTML = ''
        }
        else{
            window.alert('Insira um valor novo')
        }
    }
}

function finalizar(){

    if (lista.length == 0) { //se o botão finalizar for clicado e nao tiverem valores adicionados aparece o window.alert
        window.alert('Nenhum número encontrado! Cadastre valores...')
    }
    else {
        let soma = 0
        for (let s = 0; s < resultado.length; s++){ //usando loop para somar os valores dentro do array
            soma += resultado[s]
        }

        let maior = Math.max.apply(Math, resultado) //usando math.max para descobrir o maior valor e o .apply para quando estiver dentro de um array (lista [])
        let menor = Math.min.apply(Math, resultado) //usando math.min para descobrir o menor valor 

        let media = soma/resultado.length
        res.innerHTML += `<p>Foram adicionados ${resultado.length} valores!</p>
        <p>A soma dos valores é: ${soma}</p>
        <p>O maior valor é ${maior}</p>
        <p>O menor valor é ${menor}</p>
        <p>A média dos valores é ${media}</p>`
    }
    
    
}

