import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { LoginComponent } from './Modules/login/login.component';
import { AuthGuard } from './guards/auth-guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ AuthGuard ]
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