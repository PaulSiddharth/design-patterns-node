class Rating {
    ratings: Array<number>;
    comments: Array<Comment>;
    total: number;
  constructor(
    
  ) {
    this.ratings = [];
    this.comments = [];
    this.total = 0;
  }

  getAverageRating(): number {
    return this.total / this.ratings.length;
  }

  addRatingAndComment(comment: string, rating: number) {
    this.ratings.push(rating);
    this.comments.push(new Comment(comment));
    this.total += rating;
    
  }
}