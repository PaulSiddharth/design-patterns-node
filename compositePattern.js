class Component {
    print() {
      throw new Error('Override this method');
    }
  
    size() {
      throw new Error('Override this method');
    }
  }

  
class File extends Component {
    constructor(name, size, location) {
      super();
      this.name = name;
      this.size = size;
      this.location = location
    }
  
    print() {
      console.log(`The File with the name ${this.name} whose size is ${this.size} KB, present is ${this.location}`);
    }
  
    size() {
      return this.size;
    }
  }
  

class Folder extends Component {
    constructor(name) {
      super();
      this.name = name;
      this.files= [];
    }
  
    add(file) {
      this.files.push(file);
    }
  
    delete(file) {
      const idx = this.children.indexOf(file);
      if (index !== -1) {
        this.files.splice(idx, 1);
      }
    }
  
    print() {
      console.log(`Folder: ${this.name}`);
      this.files.forEach((file) => {
        file.print();
      });
    }
  }
  
  const file = new File('document.txt', 10, 'c:/users/downloads');
const folder = new Folder('users');
folder.add(file);

const root = new Folder('Root');
root.add(folder);

console.log('File system structure:');
root.print();
