import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css']
})
export class ChildPageComponent implements OnInit {

  @Input() pages:[]
  constructor() { }

  ngOnInit(): void {
  }

}
