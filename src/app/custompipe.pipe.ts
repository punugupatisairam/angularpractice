import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(p:any,wish:string): string {
    if(p.gender==="male"){
      return `"shalom Mr" ${p.name} ${wish}`
    }
    else{
      return `"shalom Miss" ${p.name} ${wish}`

    }
    
    
  }

}
