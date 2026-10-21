import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlunoLocalService } from '../../services/aluno-local';

@Component({
  selector: 'app-alunos',
  imports: [RouterLink],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {
  private alunoService = inject(AlunoLocalService);

  alunos = this.alunoService.listar();

  excluir(id: number): void {
    const confirmar = confirm('Esta certo disso?');

    if (!confirmar) {
      return;
    }
    const excluiu = this.alunoService.excluir(id);
    if (excluiu) {
      alert('Aluno excluído com sucesso!');
    } else {
      alert('Aluno não encontrado!');
    }
  }
}
