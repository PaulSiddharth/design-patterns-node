class Show {
    constructor(showId, movie, startTime, endTime, screen) {
      this.showId = showId;
      this.movie = movie;
      this.startTime = startTime;
      this.endTime = endTime;
      this.screen = screen;
      this.availableSeats = screen.totalSeats;
    }
  }
  
  module.exports = Show;
  