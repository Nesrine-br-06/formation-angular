import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string { //value c'est la valeur sur laquelle va s'appliquer le pipe
   const position = args[0] ?? 0; //?? c-a-d si l'arg[0] n'existe pas alors cont position = 0
   return value [position];
   
}
}