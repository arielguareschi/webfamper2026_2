import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Aluno } from '../../models/aluno';
import { AlunoLocalService } from '../../services/aluno-local';

@Component({
  selector: 'app-editar',
  imports: [RouterLink, FormsModule],
  templateUrl: './editar.html',
  styleUrl: './editar.css',
})
export class Editar {
  private alunoService = inject(AlunoLocalService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  aluno: Aluno | undefined;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const alunoEncontrado = this.alunoService.buscarPorId(id);
    if (alunoEncontrado) {
      this.aluno = { ...alunoEncontrado };
    }
  }

  salvar(): void {
    if (!this.aluno) {
      return;
    }

    if (!this.aluno.nome.trim() || !this.aluno.email.trim() || !this.aluno.curso.trim()) {
      alert('Preencha todos os campos!');
      return;
    }
    const atualizou = this.alunoService.atualizar(this.aluno);
    if (atualizou) {
      alert('Aluno atualizado com sucesso!');
      this.router.navigate(['/alunos']);
    } else {
      alert('Erro ao atualizar aluno.');
    }
  }
}
