import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date=pipe'
})
export class Date=pipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
