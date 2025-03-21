const User = require('./User')
class Admin extends User {
    constructor(userId, name, email, phone){
        super(userId, name, email, phone)
    }

    addMovie(movie){
        // adding movie
    }

    createShow(show){
        // adding show
    }
}

module.exports = Admin