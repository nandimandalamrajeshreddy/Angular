import { Title } from '@angular/platform-browser';
import { IProduct } from './../entities/product.entity';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridFilter'
})
export class GridFilterPipe implements PipeTransform {

  transform(gridList: IProduct[], filterText?: any): IProduct[] {
    if (filterText != "" && filterText != null && filterText != undefined) {
      return gridList.filter(product => product.Title.toLowerCase().includes(filterText.toLowerCase()));
    }
    return gridList;
  }

}
