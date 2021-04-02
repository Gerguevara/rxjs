import { Observable, Observer, Subscriber } from 'rxjs';

// observer es una interfaz que oblica a usar next, error y complete
const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.warn('huuyyyyy'),
  complete:  ()=> console.log('completado')  
}

const intervalo = new Observable<number>(subscriber => {

  let tiempo = 0;
  setInterval(() => {    
    subscriber.next(tiempo);
    tiempo ++;
  }, 1000)
});


const referencia = intervalo.subscribe(observer)
const referencia2 = intervalo.subscribe(observer)
const referencia3 = intervalo.subscribe(observer)

// el add añade una subscripcion a otra
referencia.add(referencia2)
.add(referencia3)



setTimeout(() => {
  referencia.unsubscribe();
  console.log('no more');
  
}, 10000)