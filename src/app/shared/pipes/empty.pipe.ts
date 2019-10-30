import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyString'
})
export class EmptyStringPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    return (typeof value === 'undefined' || value === null ? '' : value);
  }

}
