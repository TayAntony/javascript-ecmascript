function clicar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_formulario = document.getElementById('txtnascimento')
    var resultado = document.getElementById('resultado')

    if (ano_formulario.value == 0 || Number(ano_formulario.value) > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano_atual - Number(ano_formulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade <= 2) {
                // bebe
                img.setAttribute('src', 'imagens_ex02/menino_rn.png')
            } else if (idade >=3 && idade <13) {
                // criança
                img.setAttribute('src', 'imagens_ex02/menino_crianca.png')
            } else if (idade >=13 && idade <=21) {
                //adolescente
                img.setAttribute('src', 'imagens_ex02/menino_adolescente.png')
            } else if (idade >=21 && idade <= 35) {
                //adulto
                img.setAttribute('src', 'imagens_ex02/homem.png')
            } else if (idade >=36 && idade <=50) {
                //meia idade
                img.setAttribute('src', 'imagens_ex02/homem_mi.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens_ex02/homem_idoso.png')
            }


        } else if (sexo[1].checked) {
            genero = 'mulher'
            if (idade <= 2) {
                // bebe
                img.setAttribute('src', 'imagens_ex02/menina_rn.png')
            } else if (idade >=3 && idade <=13) {
                // criança
                img.setAttribute('src', 'imagens_ex02/menina_crianca.png')
            } else if (idade >=13 && idade <=21) {
                //adolescente
                img.setAttribute('src', 'imagens_ex02/menina_adolescente.png')
            } else if (idade >=21 && idade <= 35) {
                //adulta
                img.setAttribute('src', 'imagens_ex02/mulher.png')
            } else if (idade >=36 && idade <=50) {
                //meia idade
                img.setAttribute('src', 'imagens_ex02/mulher_mi.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens_ex02/mulher_idosa.png')
            }
        }
        resultado.innerHTML = `Detectei ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}