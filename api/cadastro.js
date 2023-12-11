import { verificarSenha, validaEmail } from "../validacoes";
import { api } from "./rotas";

async function cadastro (email, nome, senha) {
    const senhaCorreta = verificarSenha(senha);
    const emailCerto = validaEmail(email);

    if (senhaCorreta && emailCerto) {
            const dados = {
                email : email,
                senha : senha,
                nome : nome
            };

            try {
                const requisicao = await fetch (`https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/cliente`, {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(dados)
                });
    
                const resposta = await requisicao.json();
    
                console.log(resposta);
                alert(resposta.message)

            } catch (error) {
                console.log(error);
            }

        } else {
            alert('Email ou senha inválido');
        }
}

export { cadastro };