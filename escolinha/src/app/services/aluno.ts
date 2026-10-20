import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private alunos: Aluno[] = [
    {
      id: 1,
      nome: 'Jubileu',
      email: 'jubileu@example.com',
      curso: 'Engenharia de Software',
    },
    {
      id: 2,
      nome: 'Astolfo',
      email: 'astolfo@example.com',
      curso: 'Ciência da Computação',
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'maria@example.com',
      curso: 'Administração',
    },
  ];

  private proximoId: number = 4;

  listar(): Aluno[] {
    return this.alunos;
  }

  buscarPorId(id: number): Aluno | undefined {
    return this.alunos.find((aluno) => aluno.id === id);
  }

  cadastrar(aluno: Omit<Aluno, 'id'>): void {
    const novoAluno: Aluno = {
      id: this.proximoId++,
      nome: aluno.nome,
      email: aluno.email,
      curso: aluno.curso,
    };

    this.alunos.push(novoAluno);
  }

  atualizar(alunoAtualizado: Aluno): boolean {
    const indice = this.alunos.findIndex((aluno) => aluno.id === alunoAtualizado.id);

    if (indice === -1) {
      return false;
    }

    this.alunos[indice] = { ...alunoAtualizado };
    return true;
  }

  excluir(id: number): boolean {
    const indice = this.alunos.findIndex(
      (aluno) => aluno.id === id);

    if (indice === -1) {
      return false;
    }

    this.alunos.splice(indice, 1);
    return true;
  }
}
