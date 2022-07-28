function fatorial(n) {
    if (n==1){
        return 1
    } else {
        return n * fatorial(n-1) //chamando a função fatorial dentro dela mesma (recursividade)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3x 2 x 1
5! = 5 x 4! 

n! = n x (n-1)!
1! = 1

*/