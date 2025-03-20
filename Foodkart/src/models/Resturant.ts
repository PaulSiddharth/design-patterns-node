class Resturant {
    public foodItem: FoodItem
    public ratings: Rating

  constructor(
    public id: number,
    public listOfPincode: Array<string>,
    public name: string,
    public rating: number,
    foodName: string,
    price: number,
    quantity: number,
  ) {
    this.name = name;
    this.listOfPincode = listOfPincode;
    this.rating = rating;
    this.foodItem = new FoodItem(foodName, price, quantity);
    this.ratings = new Rating();

  }

}