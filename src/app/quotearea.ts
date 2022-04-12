export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date,
    public user: string,
    public upvote: number,
    public downvote: number
  ) {
    this.showDescription = true;
  }
}
