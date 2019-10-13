import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collectionFilter'
})
export class CollectionFilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if(!items || !filter) {
      return items;
    }
    return items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
