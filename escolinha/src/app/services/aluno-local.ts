import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoLocalService {
  private readonly storageKey = 'aluninhos_da_escolinha';
  private alunos: Aluno[] = [];
  private proximoId = 1;

  constructor() {
    this.carregarDados();
  }

  private dadosIniciais(): Aluno[] {
    return [
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
  }

  private carregarDados(): void {
    const dados = localStorage.getItem(this.storageKey);
    if (dados !== null) {
      try {
        const alunosSalvos = JSON.parse(dados);
        if (Array.isArray(alunosSalvos)) {
          this.alunos = alunosSalvos;
        } else {
          console.error('Dados invalidos');
        }
      } catch (error) {
        console.error('Erro ao carregar:', error);
      }
    } else {
      this.alunos = this.dadosIniciais();
      this.salvarDados();
    }
    this.atualizarProximoId();
  }

  private salvarDados(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.alunos));
  }

  private atualizarProximoId(): void {
    this.proximoId = Math.max(0, ...this.alunos.map((aluno) => aluno.id)) + 1;
  }

  cadastrar(aluno: Omit<Aluno, 'id'>): void {
    const novoAluno: Aluno = {
      id: this.proximoId++,
      nome: aluno.nome,
      email: aluno.email,
      curso: aluno.curso,
    };

    this.alunos.push(novoAluno);
    this.salvarDados();
  }

  listar(): Aluno[] {
    return this.alunos;
  }

  buscarPorId(id: number): Aluno | undefined {
    return this.alunos.find((aluno) => aluno.id === id);
  }

  atualizar(alunoAtualizado: Aluno): boolean {
    const indice = this.alunos.findIndex((aluno) => aluno.id === alunoAtualizado.id);

    if (indice === -1) {
      return false;
    }

    this.alunos[indice] = { ...alunoAtualizado };
    this.salvarDados();

    return true;
  }

  excluir(id: number): boolean {
    const indice = this.alunos.findIndex((aluno) => aluno.id === id);

    if (indice === -1) {
      return false;
    }

    this.alunos.splice(indice, 1);
    this.salvarDados();
    return true;
  }
}
