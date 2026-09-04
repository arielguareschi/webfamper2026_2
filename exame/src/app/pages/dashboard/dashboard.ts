import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  contador: number = 0;
  passo = 1;
  ativo = false;

  alternarAtivo() {
    this.ativo = !this.ativo;
  }

  incrementar() {
    this.contador += this.passo;
    // this.contador = this.contador + this.passo;
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador -= this.passo;
    }
  }
}
