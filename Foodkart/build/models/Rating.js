"use strict";
class Rating {
    constructor() {
        this.ratings = [];
        this.comments = [];
        this.total = 0;
    }
    getAverageRating() {
        return this.total / this.ratings.length;
    }
    addRatingAndComment(comment, rating) {
        this.ratings.push(rating);
        this.comments.push(new Comment(comment));
        this.total += rating;
    }
}
