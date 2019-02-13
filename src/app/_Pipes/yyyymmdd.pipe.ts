import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { YYYYMMDD } from '../_Modals/yyyymmdd';

@Pipe({
  name: 'yYYYMMDD'
})
export class YYYYMMDDPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, YYYYMMDD.DATE_FMT);
  }
}
