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
    new Quotearea(2, "Second Quote", 1,0),
    new Quotearea(3, "Another Quote", 0,0),
    new Quotearea(4, "Final sample  Quote", 5,8),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var maximum = Math.max(...arr);
