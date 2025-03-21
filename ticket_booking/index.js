const User = require('./models/User');
const Admin = require('./models/Admin');
const Movie = require('./models/Movie');
const Theater = require('./models/Threater');
const Screen = require('./models/Screen');
const Seat = require('./models/Seat');
const Show = require('./models/Show');
const BookingService = require('./services/BookingService');

// Payment Strategies
const CreditCardPayment = require('./strategies/CreditCardPayment');
const UpiPayment = require('./strategies/UpiPayment');
const WalletPayment = require('./strategies/WalletPayment');

// Notification Observers
const EmailNotifier = require('./observers/EmailNotifier');
const SmsNotifier = require('./observers/SmsNotifier');

// ----- SETUP -----
let admin = new Admin(1, 'Admin', 'admin@mtb.com', '12345');
let movies = [];
let theaters = [];
let shows = [];

let movie = new Movie(1, 'Inception', 'Sci-fi', 'English', 150, 'Mumbai');
admin.addMovie(movies, movie);

let theater = new Theater(1, 'PVR', 'Mumbai');
let screen = new Screen(1, 'Screen 1', 10);
for (let i = 1; i <= 10; i++) {
  screen.addSeat(new Seat(i, `S${i}`, 'Regular'));
}
theater.addScreen(screen);
theaters.push(theater);

let show = new Show(1, movie, '2025-03-22 10:00', '2025-03-22 12:30', screen);
admin.createShow(shows, show);

// ----- Add Observers -----
BookingService.addObserver(new EmailNotifier());
BookingService.addObserver(new SmsNotifier());

// ----- USERS -----
const user1 = new User(2, 'John', 'john@gmail.com', '98765');
const user2 = new User(3, 'Alice', 'alice@gmail.com', '45678');

// Same seats selected
let selectedSeats = [screen.seats[0], screen.seats[1]];

// Booking attempt function
async function attemptBooking(user, seats, paymentStrategy) {
  try {
    let booking = await BookingService.createBooking(user, show, seats, paymentStrategy);
    console.log(`${user.name} Booking Successful:`, booking.bookingId);
  } catch (err) {
    console.log(`${user.name} Booking Failed: ${err.message}`);
  }
}

// Simulate concurrent bookings
async function simulate() {
  console.log('\n--- Starting Concurrent Booking Simulation ---\n');

  await Promise.all([
    attemptBooking(user1, selectedSeats, new CreditCardPayment()),
    attemptBooking(user2, selectedSeats, new UpiPayment())
  ]);

  console.log('\n--- Simulation Complete ---');
  console.log(`Final Seat Status:`);
  screen.seats.forEach(seat => {
    console.log(`Seat ${seat.seatNumber}: ${seat.isBooked ? 'BOOKED' : 'AVAILABLE'}`);
  });
}

simulate();
