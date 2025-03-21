class Theater {
    constructor(id, name, location){
        this.theaterId = id;
        this.name = name;
        this.location = location;
        this.screens = [];
    }

    addScreen(screen){
        this.screens.push(screen)
    }
}

module.exports = Theater;
