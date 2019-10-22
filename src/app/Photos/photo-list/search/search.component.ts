import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

import { debounceTime } from 'rxjs/operators/';
import { Subject } from 'rxjs';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {

    this.debounce.pipe(debounceTime(300))
      .subscribe(filter => console.log(filter));

  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
