import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LancamentoComponent } from './pages/lancamento/lancamento.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lancamento',
        component: LancamentoComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
