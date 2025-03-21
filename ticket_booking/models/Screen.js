// Screen.js
class Screen {
    constructor(screenId, name, totalSeats) {
      this.screenId = screenId;
      this.name = name;
      this.totalSeats = totalSeats;
      this.seats = [];
    }
  
    addSeat(seat) {
      this.seats.push(seat);
    }
  }
  
  module.exports = Screen;
  