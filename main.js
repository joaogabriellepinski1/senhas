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
     
for (i = 0; i <checkbox.length; i ++) {
    checkbox[i],onclick = geraSenha;
}

geraSenha();

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = math.random() * alfabeto.length;
        numeroAleatorio = senha + alfabeto[numeroAleatorio];
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.vale = senha;
    classificaSenha ( alfabeto.length);

    {
function classificaSenha(tamanhoAlfabeto)

