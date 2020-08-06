import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-search',
  templateUrl: './child-search.component.html',
  styleUrls: ['./child-search.component.css']
})
export class ChildSEARCHComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() submitted =new EventEmitter<string>();

term:''
  onSubmit(value:any)
  {
    event.preventDefault();
    this.submitted.emit(this.term)
  }

}
