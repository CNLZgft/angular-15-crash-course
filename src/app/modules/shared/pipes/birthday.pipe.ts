import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'birthday',
})
export class BirthdayPipe implements PipeTransform {
  transform(birthdate: Date): string {
    const date = moment(birthdate);
    return `My birthday is on ${date.format('DD/MM/YYYY')}`;
  }
}
