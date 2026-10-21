import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlunoLocalService } from '../../services/aluno-local';

@Component({
  selector: 'app-cadastrar',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css',
})
export class Cadastrar {
  private alunoService = inject(AlunoLocalService);
  private router = inject(Router);

  nome = '';
  email = '';
  curso = '';

  salvar(): void {
    if (!this.nome.trim() || !this.email.trim() || !this.curso.trim()) {
      alert('Preencha todos os campos!');
      return;
    }

    this.alunoService.cadastrar({
      nome: this.nome,
      email: this.email,
      curso: this.curso,
    });

    alert('Aluno cadastrado com sucesso!');
    this.router.navigate(['/alunos']);
  }
}
