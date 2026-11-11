import { Component, inject } from "@angular/core";
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ConteudosService } from "../../core/services/conteudos.service";
@Component({
  selector: "app-manutencao-conteudo",
  imports: [ReactiveFormsModule],
  templateUrl: "./manutencao-conteudo.html",
  styleUrl: "./manutencao-conteudo.css",
})
export class ManutencaoConteudo {
  private fb = inject(FormBuilder);
  private conteudosService = inject(ConteudosService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  editingId: string | null = null;
  loading = false;
  loadingData = false;
  successMessage = "";
  errorMessage = "";

  form = this.fb.nonNullable.group({
    categoria: ["", [Validators.required, Validators.minLength(3)]],
    titulo: ["", [Validators.required, Validators.minLength(15)]],
    icone: ["", [Validators.required]],
    cor: ["", [Validators.required]],
    resumo: ["", [Validators.required]],
    descricao: ["", [Validators.required]],
    autor: ["", [Validators.required]],
    formato: ["", [Validators.required]],
    acesso: ["", [Validators.required]],
    preco: [0, [Validators.required, Validators.min(0)]],
    beneficios: this.fb.array([this.createBeneficioControl()]),
    ativo: [true],
  });

  get beneficios(): FormArray {
    return this.form.controls.beneficios;
  }

  private createBeneficioControl(value = "") {
    return this.fb.nonNullable.control(value, [Validators.required]);
  }

  adicionarBeneficio(): void {
    this.beneficios.push(this.createBeneficioControl());
  }

  removerBeneficio(index: number): void {
    if (this.beneficios.length > 1) {
      this.beneficios.removeAt(index);
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get("id");
    if (id) {
      this.editingId = id;
      this.loadConteudo(id);
    }
  }

  loadConteudo(id: string): void {
    this.loadingData = true;
    this.conteudosService.getById(id).subscribe({
      next: (conteudo) => {
        this.beneficios.clear();
        const beneficios = conteudo.beneficios?.length ? conteudo.beneficios : [""];
        beneficios.forEach((beneficio) =>
          this.beneficios.push(this.createBeneficioControl(beneficio)),
        );
        this.form.patchValue({
          titulo: conteudo.titulo,
          categoria: conteudo.categoria,
          icone: conteudo.icone,
          cor: conteudo.cor,
          resumo: conteudo.resumo,
          descricao: conteudo.descricao,
          autor: conteudo.autor,
          formato: conteudo.formato,
          acesso: conteudo.acesso,
          preco: conteudo.preco,
          ativo: conteudo.ativo ?? true,
        });
        this.loadingData = false;
      },
      error: (error) => {
        this.errorMessage = "Erro ao carregar conteúdo: " + error.message;
        this.loadingData = false;
      },
    });
  }

  submit(): void {
    this.successMessage = "";
    this.errorMessage = "";
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    const formValue = this.form.getRawValue();
    const conteudoData = {
      categoria: formValue.categoria,
      titulo: formValue.titulo,
      icone: formValue.icone,
      cor: formValue.cor,
      resumo: formValue.resumo,
      descricao: formValue.descricao,
      autor: formValue.autor,
      formato: formValue.formato,
      acesso: formValue.acesso,
      preco: formValue.preco,
      beneficios: formValue.beneficios,
      ativo: formValue.ativo,
    };
    if (this.editingId !== null) {
      this.conteudosService.update(this.editingId, conteudoData).subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = "Conteúdo atualizado com sucesso!";
          setTimeout(() => {
            this.router.navigate(["/admin"]);
          }, 1000);
        },
        error: () => {
          this.loading = false;
          this.errorMessage = "Erro ao atualizar conteúdo.";
        },
      });
      return;
    }

    this.conteudosService.create(conteudoData).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = "Conteúdo criado com sucesso!";
        this.form.reset();
        this.beneficios.clear();
        this.beneficios.push(this.createBeneficioControl());
        setTimeout(() => {
          this.router.navigate(["/admin"]);
        }, 1000);
      },
      error: () => {
        this.loading = false;
        this.errorMessage = "Erro ao criar conteúdo.";
      },
    });
  }
}
