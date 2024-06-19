const numeroSenha = document.querySelector('.parametro-senha__texto')
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvywz';
const numeros = '0123456789';
const simbolos ='!@%*?';
const botoes = document.querySelectorAll('parametro-senha__botao');
const campoSenha  = document.querySelectorAll("#campo-senha");
const checkbox = ('checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].enclick = diminuiTamanho;
botoes [1].enclick = aumentaTamanho;

function diminuiTamanho() {
    // tamanhoSenha = tamanhoSenha-1;
    tamanhoSenha--;
}
function aumentaTamanho() {
    if (aumentaTamanho < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
      

