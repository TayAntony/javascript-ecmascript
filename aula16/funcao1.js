function par_impar (n) { // n = parâmetro
    if (n%2==0) { //if e else = ação
        return 'Par!'
    } else {
        return 'Ímpar!' //existem 2 returns mas apenas 1 será mostrado
    }
}

let resultado = par_impar(356) //chamada da função
console.log(resultado)

//console.log(par_impar(2)) outra maneira de chamar sem usar variavel