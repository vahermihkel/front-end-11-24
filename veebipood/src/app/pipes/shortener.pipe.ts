import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener',
  standalone: true
})
export class ShortenerPipe implements PipeTransform {

  transform(value: string, count: number): string {
    return value.length > count ? value.substring(0,count)+"..." : value;
  }

}
