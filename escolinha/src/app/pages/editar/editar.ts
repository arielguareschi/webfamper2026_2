import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../models/aluno';
import { AlunoService } from '../../services/aluno';

@Component({
  selector: 'app-editar',
  imports: [],
  templateUrl: './editar.html',
  styleUrl: './editar.css',
})
export class Editar {
  private alunoService = inject(AlunoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  aluno: Aluno | undefined;
}
