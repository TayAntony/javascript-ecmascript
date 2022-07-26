function gerar(){
    var numero = document.getElementById('numero')
    var select = document.getElementById('select')

    if (numero.value.length == 0) { //se o usuário não digitar nada
        window.alert('Por favor, digite um valor!')
    }
    else {
        let i = Number(numero.value)
        select.innerHTML = '' //um innerHTML vazio para limpar a tabuada anterior
        // -------usando loop em while -------
//          let contador = 1
/*          while (contador <=10) {
            let item = document.createElement('option')
            item.text = `${i} x ${contador} = ${i*contador}`
            item.value = `select${contador}` para saber qual item foi selecionado (PHP)
            select.appendChild(item) adicionar o item ao select
            contador++
        }                                                                                         */
        for(let contador = 0; contador <11; contador++) {
        res = i*contador
        select.innerHTML += `<option value="${i}">${i} x ${contador} = ${res}</option>`
        }
        
    }
    
}