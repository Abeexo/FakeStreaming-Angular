import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperpipe'
})
export class UpperpipePipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  }
}
