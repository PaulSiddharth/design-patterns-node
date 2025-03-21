class User {
    constructor(userId, name, email, phone){
        this.userId = userId;
        this.name = name;
        this.email = email,
        this.phone = phone;
        this.bookings = []
    }

    searchMovies(criteria){
        // return list of search movies
    }

    bookTickets(show, seats){
        // create booking
    }

    cancelTicket(bookingId){

    }
}

module.exports = User