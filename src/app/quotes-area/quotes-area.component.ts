import { Component, OnInit } from '@angular/core';
import { Quotearea } from '../quotearea';
@Component({
  selector: 'app-quotes-area',
  templateUrl: './quotes-area.component.html',
  styleUrls: ['./quotes-area.component.css']
})
export class QuotesAreaComponent implements OnInit {

  quotesall: Quotearea[] = [
    new Quotearea(1, "Sample Quote", 0,0),
    new Quotearea(2, "Second Quote", 0,0),
    new Quotearea(3, "Another Quote", 0,0),
    new Quotearea(4, "Final sample  Quote", 0,0),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
