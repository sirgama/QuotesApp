export class Quotearea {
  id:number;
  quote:string;
  author: string;
  person: string;
  upvotes:number;
  downvotes:number;


  constructor(id:number, quote:string, author:string, person: string, upvotes: number, downvotes: number){
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.person = person;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
  }
}
