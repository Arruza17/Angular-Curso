import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      return value
      .split(' ')
      .map(p => p[0].toUpperCase() +p.slice(1).toLowerCase())
      .join(' ')
    }else{
      return null
    }

  }

}
