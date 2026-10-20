import { Routes } from '@angular/router';
import { Alunos } from './pages/alunos/alunos';
import { Cadastrar } from './pages/cadastrar/cadastrar';
import { Editar } from './pages/editar/editar';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'alunos', component: Alunos },
  { path: 'cadastrar', component: Cadastrar },
  { path: 'editar/:id', component: Editar },
  { path: '**', redirectTo: '' },
];
