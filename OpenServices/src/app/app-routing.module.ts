import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './guards/auth-guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'candidato-detalhes/:userId',
  //   component: CandidatoDetalhesComponent,
  //   canActivate: [ AuthGuard ],
  //   resolve: {
  //     data: CandidatoDetalhesResolver
  //   },
  // },
  // {
  //   path: 'profile',
  //   component: ContaComponent,
  //   canActivate: [ AuthGuard ],
  //   resolve: {
  //     data: ContaResolver
  //   },
  // },
  // {
  //   path: '**',
  //   redirectTo: 'login',
  // },
];