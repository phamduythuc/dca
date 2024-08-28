import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe'
})
export class UppercasePipePipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.toUpperCase() : value;
  }

}
