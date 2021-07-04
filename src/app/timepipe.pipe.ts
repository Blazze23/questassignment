import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepipe'
})
export class TimepipePipe implements PipeTransform {

  transform(value: number ): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60); // using modulus operator to get the remainder which are minutes
    return hours + ' hrs ' + minutes + ' mins';
  }
}
