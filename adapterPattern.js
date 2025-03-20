// Existing system with an incompatible interface
class OldSystem {
    specificMethod() {
      console.log('Old system specific method');
    }
  }
  
  // Target interface that the client code expects
  class TargetInterface {
    requiredMethod() {}
  }
  
  // Adapter class that adapts OldSystem to TargetInterface
  class Adapter extends TargetInterface {
    constructor(oldSystem) {
      super();
      this.oldSystem = oldSystem;
    }
  
    requiredMethod() {
      this.oldSystem.specificMethod();
    }
  }
  
  // Client code that uses the adapter
  const oldSystem = new OldSystem();
  const adapter = new Adapter(oldSystem);
  
  // Now, you can use the adapter as if it were an instance of TargetInterface
  adapter.requiredMethod();
  