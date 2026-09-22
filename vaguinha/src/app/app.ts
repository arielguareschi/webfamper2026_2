import { Component } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { CardVaga } from './components/card-vaga/card-vaga';
import { Rodape } from './components/rodape/rodape';
import { Vaga } from './models/vaga';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, CardVaga],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo: string = 'Vagas em destaque';
  subtitulo: string = 'Conheça as vagas';

  usuarioLogado: boolean = false;
  nomeUsuario: string = 'Tiburso Vandercride';

  vagas: Vaga[] = [
    {
      id: 1,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 2,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 3,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 4,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 5,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 6,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 7,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 8,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 9,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 10,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
    {
      id: 11,
      empresa: 'TechVaga',
      cargo: 'Recepcionista',
      salario: 10000,
      localizacao: 'Vargem',
      modalidade: 'Home-office',
      descricao: 'Atender quem chega no escritorio',
      aberta: true,
      urgente: true,
      imagem: 'https://grupoalbatroz.com.br/wp-content/uploads/2024/09/image-1586029511.png',
      requisitos: [
        'Conhecimento em HTML e Css',
        'Conhecimento em Excel',
        'Conhecimento em eletronica',
      ],
    },
  ];

  alterarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
