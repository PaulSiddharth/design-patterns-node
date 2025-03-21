const Booking = require('../models/Booking');
const Payment = require('../models/Payments');
const { Mutex } = require('async-mutex');

class SeatLock {
  constructor() {
    this.locks = new Map(); // seatId -> Mutex
  }

  acquire(seatId) {
    if (!this.locks.has(seatId)) {
      this.locks.set(seatId, new Mutex());
    }
    return this.locks.get(seatId);
  }
}

const seatLock = new SeatLock();

class BookingService {
  static bookings = [];
  static observers = [];

  static addObserver(observer) {
    this.observers.push(observer);
  }

  static notifyAll(user, message) {
    this.observers.forEach(observer => observer.notify(user, message));
  }

  static async createBooking(user, show, seats) {
    // Step 1: Acquire all locks manually
    const acquiredLocks = [];
    try {
      for (let seat of seats) {
        const lock = seatLock.acquire(seat.seatId);
        const release = await lock.acquire(); // Manual acquire
        acquiredLocks.push(release);
      }

      // Step 2: Check availability
      for (let seat of seats) {
        if (seat.isBooked) {
          throw new Error(`Seat ${seat.seatNumber} already booked`);
        }
      }

      // Step 3: Mark seats as booked
      seats.forEach(seat => seat.isBooked = true);

      // Step 4: Payment
      let payment = new Payment(`P-${Date.now()}`, seats.length * 200);
      payment.completePayment();

      // Step 5: Booking
      let booking = new Booking(`B-${Date.now()}`, show, user, seats, payment);
      this.bookings.push(booking);
      user.bookings.push(booking);

      // Notify observers
      this.notifyAll(user, `Booking Successful: ${booking.bookingId}`);

      return booking;
    } catch (err) {
      throw err;
    } finally {
      // Step 6: Always release locks (Success or Fail)
      for (let release of acquiredLocks) {
        release();
      }
    }
  }

  static cancelBooking(bookingId) {
    let booking = this.bookings.find(b => b.bookingId === bookingId);
    if (!booking) throw new Error('Booking not found');
    booking.cancelBooking();
    booking.seats.forEach(seat => seat.isBooked = false);
    return booking;
  }
}

module.exports = BookingService;
