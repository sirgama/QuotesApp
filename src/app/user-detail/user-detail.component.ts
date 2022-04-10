import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotearea';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() quoting!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quotingDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upside() {
    this.quoting.upvote = this.quoting.upvote + 1;
  }
  downside(){
    this.quoting.downvote = this.quoting.downvote + 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
