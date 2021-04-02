import { Observable, Observer, Subject, Subscriber } from 'rxjs';

// observer es una interfaz que oblica a usar next, error y complete
const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.warn('huuyyyyy'),
  complete:  ()=> console.log('completado')  
}



const intervalos$ = new Observable<number>(subs => {
  
  const interbalid = setInterval(() => subs.next(Math.random()), 1000);
  //finaliza el intervalo tambien
  // el retur es lo que se llama cuando se ejecuta el unsubscribe
  return () => {    
    console.log('finalizado dentro');    
    clearInterval(interbalid)
  };
});


/*
1- el subject envia el mismo valor a todas sus subscripciones, es mas rapido emitiendo
2- tambien es un observer (next, error, completed)
*/
const subject$ = new Subject() 

// subject se pasa como interface de ejecucion para este observable, en lugar 
//usar el observer y toda la interface del callback
intervalos$.subscribe(subject$);
const subs1 = subject$.subscribe(rnd => console.log('subs1 '+ rnd));
const subs2 = subject$.subscribe(rnd => console.log('subs2 ' + rnd));


setTimeout(() => {
  subs1.unsubscribe()
  subs2.unsubscribe()
  console.log('finalizado por unsubscribe'); 
}, 5000)