let num = [50, 200, 9, 1000]
num.push(6)
num[5] = 8
num.sort()
position = num.indexOf(9) //criando uma variável para achar o valor
console.log(`Nosso vetor tem ${num.length} elementos!`)
console.log(`O método .push(valor) adiciona um valor em qualquer posição do array`)
console.log('O método .sort() organiza os elementos em ordem crescente') // o sort organiza baseando-se na primeira casa decimal, ou seja 300 viria antes de 40 mesmo sendo maior
console.log(`O primeiro valor do array é ${num[0]}`)
console.log('Ao escrever "var num [5] = 8" é adicionado o valor 8 na última posição')
console.log(`O valor 9 está na posição ${num.indexOf(9)}`) //achando direto no console 
//ao usar indexOf para encontrar um valor que não existe ele retornará -1

for(let pos = 0; pos<num.length; pos++){
console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


//mais simplificado
for(let pos in num) { //para cada posição dentro da variável num
    console.log(num[pos])
}
