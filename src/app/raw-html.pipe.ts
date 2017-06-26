import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rawHtml'
})
export class RawHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
        let converted = value;
        converted = converted.replace(/\</g,'&lt;').replace(/\>/g, '&gt;');
        return converted;
    } else {
        return null;
    }
  }

}
