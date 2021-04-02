import { of } from 'rxjs';

// const obs$ = of(...[1,2,3,4,5],45,100,333)
const obs$ = of<number>(1,2,3,4,5)

obs$.subscribe(
  next => console.log('next ', next),
  error => console.log('error ', error),
  ()=> console.log('completed')  
)

/*
El operador of se usa para emitir o dicpara varios valores en secuencia
y posteriormente se autocompleta, tiene comportamiento sincrono
*/