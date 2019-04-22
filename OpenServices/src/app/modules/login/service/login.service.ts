import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {}

    public logaSistema(email, password) {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

        this.http.post('http://localhost:54777/api/CadastrarUsuario', {email, password})
            .toPromise().then( () => {

            console.log('CHEGUEI');
        });

        // console.log(email);
        // this.http.get('http://localhost:54777/api/teste', {headers: headers, observe: 'body', params: email}).toPromise();
    }
}