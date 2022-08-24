import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";

  debounce: Subject<string> = new Subject();
  
  termino: string = "";

  constructor() { }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  ngOnInit(): void {
    this.debounce
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor =>{
      this.onDebounce.emit(valor);
    })
  }

  teclaPresionada(){
    this.debounce.next(this.termino);
  }

}
