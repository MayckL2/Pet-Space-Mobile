function verificarSenha (senha = '', confSenha = '') {
    const mai = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var maiuscula = false;

    var minuscula = false;

    const tamanho = senha.length > 8;

    for (var i = 0; i < mai.length; i++) {
        if (senha.includes(mai[i])){
            maiuscula = true;
        }
        if (senha.includes(min[i])) {
            minuscula = true;
        }
    }

    const senhaCorreta = maiuscula && minuscula && tamanho;

    if (confSenha == '') {
        return senhaCorreta;
    } else {
        if (senhaCorreta && senha == confSenha){
            return true;
        } else {
            return false;
        }
    }
}

function validaEmail(email){
    if(email.includes('@') && email[email.search('@') + 1]){
      return true
    }else{
      return false
    }
  }


export { verificarSenha, validaEmail };
