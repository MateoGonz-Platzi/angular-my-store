import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReverse'
})
export class StringReversePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.split('').reverse().join('');
  }

}
