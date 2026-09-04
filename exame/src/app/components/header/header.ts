import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nome: string = '';
  idade: number = 0;
  ativo: boolean = false;

  alternarAtivo() {
    this.ativo = !this.ativo;
  }

  contar() {
    return this.nome.length;
  }
}
