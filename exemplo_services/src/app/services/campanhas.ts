import { Injectable } from '@angular/core';
import { Campanha } from '../models/campanha';

@Injectable({
  providedIn: 'root',
})
export class Campanhas {
  private campanhas: Campanha[] = [
    { id: 1, titulo: 'Campanha 1', descricao: 'Descricao', ativo: true },
    { id: 2, titulo: 'Campanha 2', descricao: 'Descricao', ativo: true },
    { id: 3, titulo: 'Campanha 3', descricao: 'Descricao', ativo: false },
    { id: 4, titulo: 'Campanha 4', descricao: 'Descricao', ativo: true },
    { id: 5, titulo: 'Campanha 5', descricao: 'Descricao', ativo: false },
  ];

  getAll(): Campanha[] {
    return [...this.campanhas];
  }

  getById(id: number) {
    return this.campanhas.find((campanha) => campanha.id === id);
  }

  delete(id: number) {
    this.campanhas = this.campanhas.filter((campanha) => campanha.id !== id);
  }
}
