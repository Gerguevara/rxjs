import { fromEvent } from 'rxjs';

/*eventos del dom */

const triguer = document.getElementById('trigguer');
const target = document.getElementById('drapzone');

// triguer
const src1$ = fromEvent<MouseEvent>(triguer, 'dragenter');

//target
const src2$ = fromEvent<MouseEvent>(target, 'dragover');
const src3$ = fromEvent<MouseEvent>(target, 'mouseup');


src1$.subscribe(
  evento => console.log('on triguer', evento),
  null,
  null  
)

src2$.subscribe(
  evento => {    
    console.log('on target', evento,)
  },
  null,
  null  
)

src3$.subscribe(
  evento => console.log('on target end', evento,),
  null,
  null  
)