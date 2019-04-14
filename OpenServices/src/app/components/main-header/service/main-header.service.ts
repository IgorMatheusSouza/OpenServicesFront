import { Injectable } from '@angular/core';

@Injectable()
export class MainHeaderService {

    constructor() {}

    public retrieveAvatar(): string {

        let retorno;
        if (true) { //se tem no banco

            //retorno recebe imagem do banco
        } else {

            retorno = '../../../assets/images/avatar.svg';
        }
        return retorno;
    }

    public logaSistema(email, password) {

        //autentica usuário
    }
}