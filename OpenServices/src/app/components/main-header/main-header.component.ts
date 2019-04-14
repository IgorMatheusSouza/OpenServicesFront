import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainHeaderService } from './service/main-header.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  public colecaoBotoes: any[];
  public logo = '../../assets/icons/logo_princ.png';
  public avatar: string;
  public menuCondition = false;

  constructor(private route: Router, private headerService: MainHeaderService) { }

  ngOnInit() {

    this.colecaoBotoes = this.retornaBotoes();
    this.avatar = this.retrieveImage();
  }

  public handleRoute(rota) {

    this.route.navigate(rota);
  }

  public openSubMenu() {

    this.menuCondition = !this.menuCondition;
  }

  public logaSistema(email, password) {

    this.headerService.logaSistema(email, password);
  }

  private retornaBotoes() {

    return [ {nome: 'Home', link: ''}, {nome: 'Sobre', link: 'saibaMais'}, {nome: 'Primeiros Passos', link: 'faq'} ];
  }

  private retrieveImage(): string {

    const imagem = this.headerService.retrieveAvatar();

    return imagem;
  }

}
