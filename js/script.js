window.addEventListener("onload", iniciarEvento)

function iniciarEvento() { 
    let msg = document.querySelector('div.msg')
    let imagem = document.querySelector('div.imagem')
    let data = new Date()
    let horaAtual = data.getHours()

    msg.innerHTML = `Agora são ${horaAtual} horas!`
}
