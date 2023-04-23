function verificar() {
    var txtanonasc = window.document.getElementById('txtano')
    var anonasc = Number(txtanonasc.value)
    var data = new Date()
    var ano = new Date().getFullYear() //irá pegar os 4 dígitos do ano
    var idade = Number(ano - anonasc)
    var resp = window.document.querySelector('div#resp')
    if (anonasc.lenght == 0 || anonasc > ano) {
        alert('ERRO! Verifique os dados informados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //por ser 'name', não há como utilizar o .querySelector
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        resp.textAlign = 'center'
        resp.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        resp.appendChild(img)
    }   
}
