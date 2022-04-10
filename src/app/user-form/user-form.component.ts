import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotearea';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  newQuote = new Quote (0, "", "", new Date());
  @Output() addGoal = new EventEmitter<Quote>();

  submitQuote(){
    this.addGoal.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
