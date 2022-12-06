import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {
  transform(name: string,): string {
    return `Pipe ${name}`;
  }


}
