import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotearea';
@Component({
  selector: 'app-quotes-area',
  templateUrl: './quotes-area.component.html',
  styleUrls: ['./quotes-area.component.css'],
})
export class QuotesAreaComponent implements OnInit {
  toggleDetails(index: number) {
    this.userquote[index].showDescription =
      this.userquote[index].showDescription;
  }

  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`);
      if (toDelete) {
        this.userquote.splice(index, 1);
      }
    }
  }

  userquote: Quote[] = [
    new Quote(
      1,
      'The greatest glory in living lies not in never falling, but in rising every time we fall. ',
      'Nelson Mandela',
      new Date(2022, 2, 3),
      'Atieno Obwanda',
      38,
      10
    ),
    new Quote(
      2,
      'The way to get started is to quit talking and begin doing.',
      'Walt Disney',
      new Date(2022, 4, 1),
      'Zipporah Mukami',
      12,
      2
    ),
    new Quote(
      3,
      'If life were predictable it would cease to be life, and be without flavor. ',
      'Eleanor Roosevelt',
      new Date(2022, 23, 2),
      'Zelipha Wambui',
      10,
      7
    ),
    new Quote(
      4,
      'Life is what happens when youre busy making other plans',
      'John Lennon',
      new Date(2022, 5, 4),
      'Gamaliel Sirengo',
      9,
      20
    ),
    new Quote(
      5,
      'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
      'Benjamin Franklin',
      new Date(2022, 4, 1),
      'Brian Mwevi',
      15,
      3
    ),
    new Quote(
      6,
      'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
      'Helen Keller',
      new Date(2022, 1, 4),
      'Samuel Hinga',
      10,
      10
    ),
  ];

  addNewQuoting(quote: Quote) {
    let quoteLength = this.userquote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.userquote.push(quote);
  }

  arr: number[] = this.userquote.map((Quote) => Quote.upvote);
  maxval = Math.max(...this.arr);

  constructor() {}

  ngOnInit(): void {}
}
