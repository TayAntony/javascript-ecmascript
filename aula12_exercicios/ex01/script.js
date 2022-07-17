function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var cump = window.document.getElementById('cumprimento')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 6 && hora <12){
        //bom dia
        img.src = 'imagens_ex01/manha.png'
        document.body.style.background = '#D0955E'
        cump.innerHTML = 'Bom dia!'

    }else if (hora >=12 && hora <18 ) {
        //boa tarde
        img.src = 'imagens_ex01/tarde.png'
        document.body.style.background = '#9E47BB'
        cump.innerHTML = 'Boa tarde!'

    } else if (hora >18 && hora <24) {
        //boa noite
        img.src = 'imagens_ex01/noite.png'
        document.body.style.background = '#005370'
        cump.innerHTML = 'Boa noite!'

    } else {
        //boa madrugada
        img.src = 'imagens_ex01/madrugada.png'
        document.body.style.background = '#1C1C1C'
        cump.innerHTML = 'Boa madrugada!'
    }
}