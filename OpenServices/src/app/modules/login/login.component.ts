import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public forgetPasswd = true;

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() { }

  public logaSistema(email, password) {

    this.loginService.logaSistema(email, password);
  }

  public handleRoute(rota) {

    this.route.navigate(rota);
  }

}
