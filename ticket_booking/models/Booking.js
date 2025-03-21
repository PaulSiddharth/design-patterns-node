class Booking {
    constructor(bookingId, show, user, seats, payment) {
      this.bookingId = bookingId;
      this.show = show;
      this.user = user;
      this.seats = seats;
      this.payment = payment;
      this.status = 'BOOKED';
    }
  
    cancelBooking() {
      this.status = 'CANCELLED';
      this.seats.forEach(seat => seat.isBooked = false);
    }
  }
  
  module.exports = Booking;
  