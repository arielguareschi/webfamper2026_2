import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { StrzeroPipe } from '../../pipes/strzero-pipe';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, DatePipe, StrzeroPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  exames = [
    { id: 1, nome: 'Exame de Sangue', data: '2026-01-15', resultado: 'Normal' },
    { id: 2, nome: 'Exame de Urina', data: '2026-02-20', resultado: 'Anormal' },
    { id: 3, nome: 'Exame de Fezes', data: '2026-03-10', resultado: 'Normal' },
    { id: 4, nome: 'Exame de HIV', data: '2026-04-05', resultado: 'Anormal' },
    { id: 5, nome: 'Exame de IST', data: '2026-05-12', resultado: 'Anormal' },
  ];
}
