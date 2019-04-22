import { Injectable } from '@angular/core';

@Injectable()
export class MainHeaderService {

    constructor() {}

    public retrieveAvatar(): any {

        const palavra = '';
        let retorno = '../../../assets/icons/avatar.png';
        if (!palavra) { //se tem no banco

            //retorno recebe imagem do banco
        }
        return {name: null, imagem: retorno};
    }

}