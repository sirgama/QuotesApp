import { Quote } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotearea } from '../quotearea';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  newquote = new Quotearea(0," "," "," ", 0,0);
  @Output() addquote = new EventEmitter<Quotearea>();
  // submitGoal(){
  //   this.addquote.emit(this.newquote);
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
