import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LancamentoComponent } from './pages/lancamento/lancamento.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lancamento',
        component: LancamentoComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
