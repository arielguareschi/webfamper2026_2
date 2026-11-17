import { Component, inject, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Conteudo } from "../../core/models/conteudo.model";
import { ConteudosService } from "../../core/services/conteudos.service";
@Component({
  selector: "app-conteudos",
  templateUrl: "./conteudos.html",
  styleUrl: "./conteudos.css",
  imports: [RouterLink],
})
export class Conteudos {
  private conteudoService = inject(ConteudosService);

  conteudos = signal<Conteudo[]>([]);
  loading = signal(true);
  errorMessage = "";
  sucessMessage = "";

  ngOnInit(): void {
    this.loadConteudos();
  }

  loadConteudos(): void {
    this.loading.set(true);
    this.errorMessage = "";
    this.conteudoService.getAll().subscribe({
      next: (response) => {
        this.conteudos.set(response);
        this.loading.set(false);
      },
      error: (error) => {
        this.errorMessage = "Erro ao carregar conteúdos: " + error.message;
        this.loading.set(false);
      },
    });
  }
}
