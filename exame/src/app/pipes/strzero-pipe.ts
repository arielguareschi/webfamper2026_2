import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strzero',
})
export class StrzeroPipe implements PipeTransform {
  transform(valor: string | number, tamanho: number, caracter: string = '0'): string {
    if (valor === null || valor === undefined) {
      return '';
    }
    return String(valor).padStart(tamanho, caracter);
  }
}
