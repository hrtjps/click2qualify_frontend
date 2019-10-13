import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: string, key: string): any {
    if (!items || !filter) {
      return items;
    }
    if (key) {
      return items.filter(item => item[key].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    } else {
      return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

  }
}
