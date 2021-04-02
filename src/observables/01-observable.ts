import { Observable, Observer, Subscriber } from 'rxjs';

// observer es una interfaz que oblica a usar next, error y complete
const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.error('huuyyyyy jueputa'),
  complete:  ()=> console.log('completado')  
}

//const obs$ =  Observable.create();
const obs$ = new Observable<string>(subscriber => {
  
 // next es un metdo que emite 
subscriber.next('que pedooo')
subscriber.next('mundo')
// subscriber.error('mierdaaaaa!!!!')
// a partir de aca es subscriptor ya no escuchara las emision por el metodo complete
subscriber.complete();
subscriber.next('mundo')
});

//obs$.subscribe(console.log);

// obs$.subscribe(
//   resp =>  console.log(resp) ,
//   erro=> console.error(erro),
//   () =>console.log('Este es el valor del complet')
// );


obs$.subscribe(observer);
