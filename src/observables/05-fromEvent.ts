import { fromEvent } from 'rxjs';

/*eventos del dom, fron event detecta eventos*/

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


src1$.subscribe(
  evento => console.log('cliecked', evento),
  null,
  null  
)

src2$.subscribe(
  evento => console.log('cliecked', evento),
  null,
  null  
)