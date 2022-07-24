function contar() {
    
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {//caso faltem dados
        resultado.innerHTML = 'Impossível contar! \u{1F44E}' //emoji polegar pra baixo
    }
    else { // caso tenham todos os dados
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0) { //se o passo for menor ou igual a 0 irá considerar 1
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) { //contagem crescente
            for(let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += ` ${contador} \u{27A1} ` //emoji de seta
            }
        } 
        
        else { //contagem regressiva
            for (let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += ` ${contador} \u{27A1} ` //emoji de seta
            }
        }
        resultado.innerHTML += `\u{1F3C1}` //emoji de bandeira
    }
}