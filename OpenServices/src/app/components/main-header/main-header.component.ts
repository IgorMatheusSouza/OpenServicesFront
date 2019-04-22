import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MainHeaderService } from './service/main-header.service';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  providers: [MainHeaderService]
})
export class MainHeaderComponent implements OnInit, OnDestroy {

  public formGroupDados: FormGroup;
  public colecaoBotoes: any[];
  public logo = '../../assets/icons/logo.jpeg';
  public avatar: string;
  public userName: string;
  public forgetPasswd = true;
  public menuValidator = false;
  private loginSubscription: Subscription;

  constructor(private route: Router, private headerService: MainHeaderService, private dialog: MatDialog) { }

  ngOnInit() {

    this.colecaoBotoes = this.retornaBotoes();
    this.retrieveImage();
    console.log(this.colecaoBotoes);
  }

  public handleRoute(rota) {

    this.route.navigate(rota);
  }

  public openSubMenu() {

    if (this.menuValidator) {

      this.forgetPasswd = true;
      this.dialog.closeAll();
      this.menuValidator = false;
      return;
    }
    this.menuValidator = true;
    this.loginSubscription = this.dialog.open(LoginComponent, {disableClose: true}).afterClosed().subscribe();
  }

  private retornaBotoes() {

    return [ {nome: 'Home', link: ''}, {nome: 'Sobre', link: 'saibaMais'}, {nome: 'Primeiros Passos', link: 'faq'} ];
  }

  private retrieveImage() {

    const user = this.headerService.retrieveAvatar();

    this.avatar = user.imagem;
    this.userName = user.name;
  }

  ngOnDestroy() {

    this.loginSubscription.unsubscribe();
  }

}
