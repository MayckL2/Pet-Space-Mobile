import { api } from "./rotas";
import Global from "../global";

export default async function Logar (email, senha) {

    const requisicao = await fetch (`https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/auth/cliente?email=${email}&senha=${senha}`, {
        method : 'POST'
    });


    if (!requisicao.ok) {
        // alert('Email ou senha invalidos');
        return;
    }

    const resposta = await requisicao.json();
    
    Global.token = resposta.token;
    
    console.log(resposta)

    if(resposta.token){
        return true
    }
}