// Abstract factory for creating UI components
class UIFactory {
    createButton() {}
    createInputField() {}
    createTooltip() {}
  }
  
  // Concrete factory for light theme components
  class LightThemeFactory extends UIFactory {
    createButton() {
      return new LightThemeButton();
    }
    createInputField() {
      return new LightThemeInputField();
    }
    createTooltip() {
      return new LightThemeTooltip();
    }
  }
  
  // Concrete factory for dark theme components
  class DarkThemeFactory extends UIFactory {
    createButton() {
      return new DarkThemeButton();
    }
    createInputField() {
      return new DarkThemeInputField();
    }
    createTooltip() {
      return new DarkThemeTooltip();
    }
  }
  
  // Abstract product for buttons
  class Button {}
  
  // Concrete product for light theme buttons
  class LightThemeButton extends Button {
    constructor() {
      super();
      console.log('Light theme button created');
    }
  }
  
  // Concrete product for dark theme buttons
  class DarkThemeButton extends Button {
    constructor() {
      super();
      console.log('Dark theme button created');
    }
  }
  
  // Usage
  const lightFactory = new LightThemeFactory();
  const lightButton = lightFactory.createButton(); // Output: Light theme button created
  
  const darkFactory = new DarkThemeFactory();
  const darkButton = darkFactory.createButton(); // Output: Dark theme button created
  