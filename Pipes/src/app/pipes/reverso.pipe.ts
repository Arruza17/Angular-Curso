import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    return Array.from(value).reverse().join('');
    
  }

}
