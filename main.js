// função de acionamente de audio
function playSom(somElementId) {
    const element = document.querySelector(somElementId);

    if (element != null && element.localName === 'audio') {
        element.play();
    } else {
        alert('ELEMENTO NÃO ENCONNTRADO');
    }

}
//pegando uma lista das classes de sons
const listTeclas = document.querySelectorAll('.tecla')

for (let cont = 0; cont < listTeclas.length; cont++) {

    const tecla = listTeclas[cont];//pegando o id do item da lista de teclas de som
    const som = tecla.classList[1];//qual o tipo de som, a apartir da calsse, que será armazenado
    const idAudio = `#som_${som}`; //incremantando uma string para identar o som que desejo acionar com o click
    console.log(idAudio);
    //utilizando a função anônima para aguardar o acionamente com o click
    tecla.onclick = function () {
        playSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}
