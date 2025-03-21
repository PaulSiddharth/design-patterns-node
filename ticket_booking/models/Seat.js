class Seat {
    constructor(seatId, seatNumber, seatType) {
      this.seatId = seatId;
      this.seatNumber = seatNumber;
      this.seatType = seatType;
      this.isBooked = false;
    }
  }
  
  module.exports = Seat;
  