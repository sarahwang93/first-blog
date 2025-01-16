import { Pipe, PipeTransform } from '@angular/core'; 
  
@Pipe({ 
    standalone: true,
    name: 'pretty'
}) 
  
export class TransModule implements PipeTransform { 
  
    transform(val: any) { 
        return JSON.stringify(val, undefined, 4) 
            .replace(/ /g, ' ') 
            .replace(/\n/g, ''); 
    } 
}