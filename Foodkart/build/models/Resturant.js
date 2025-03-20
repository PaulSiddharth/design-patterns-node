"use strict";
class Resturant {
    constructor(id, listOfPincode, name, rating, foodName, price, quantity) {
        this.id = id;
        this.listOfPincode = listOfPincode;
        this.name = name;
        this.rating = rating;
        this.name = name;
        this.listOfPincode = listOfPincode;
        this.rating = rating;
        this.foodItem = new FoodItem(foodName, price, quantity);
        this.ratings = new Rating();
    }
}
