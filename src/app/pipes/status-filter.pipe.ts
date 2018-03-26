import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(objects: any[], status: string): any {
    if(objects) {
        return objects.filter(object => {
            return object.status === status;
        });
    }
  }
}
