// Define a WeatherStation class
class WeatherStation {
    constructor() {
      // Initialize an empty array to hold observers
      this.observers = [];
      // Initialize the temperature to 0
      this.temperature = 0;
    }
  
    // Method to add an observer to the list
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Method to remove an observer from the list
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // Method to set the temperature and notify observers
    setTemperature(temperature) {
      this.temperature = temperature;
      this.notifyObservers();
    }
  
    // Method to notify all observers about the temperature change
    notifyObservers() {
      this.observers.forEach(observer => {
        // Call the update method on each observer
        observer.update(this.temperature);
      });
    }
  }
  
  // Define a DisplayDevice class
  class DisplayDevice {
    constructor(name) {
      // Store the name of the display device
      this.name = name;
    }
  
    // Method called when the display is updated with temperature
    update(temperature) {
      // Log a message indicating the name of the display and the temperature
      console.log(`${this.name} Display: Temperature is ${temperature}°C`);
    }
  }
  
  // Create an instance of the WeatherStation class
  const weatherStation = new WeatherStation();
  
  // Create two instances of the DisplayDevice class with different names
  const displayDevice1 = new DisplayDevice("Display 1");
  const displayDevice2 = new DisplayDevice("Display 2");
  
  // Add both display devices as observers to the weather station
  weatherStation.addObserver(displayDevice1);
  weatherStation.addObserver(displayDevice2);
  
  // Simulate a change in temperature by setting it to 25°C
  weatherStation.setTemperature(25);
  
  // Simulate another change in temperature by setting it to 30°C
  weatherStation.setTemperature(30);
  