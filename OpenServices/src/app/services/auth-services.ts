import { Observable, Subscription } from 'rxjs';

export class AuthService {

    private user;

    constructor() {}

    public getUser() {

        return this.user;
    }

    public isLoggedIn(): Observable<boolean> {

        return Observable.create();
    }
}