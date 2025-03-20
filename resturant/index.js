class Restaurant {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.branches = [];
    }
    addBranch(branch) {
        this.branches.push(branch);
    }
}

class Branch {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.menu = new Menu();
        this.tables = [];
        this.employees = [];
        this.reservations = [];
        this.kitchen = new Kitchen();
    }
    addTable(table) {
        this.tables.push(table);
    }
    addEmployee(employee) {
        this.employees.push(employee);
        if (employee instanceof Chef) {
            this.kitchen.addChef(employee);
        }
    }
    findAvailableTables(date, time) {
        return this.tables.filter(table => table.isAvailableAt(date, time));
    }
    reserveTable(reservation) {
        this.reservations.push(reservation);
        reservation.table.reserve(reservation.date, reservation.time);
    }
}

class Kitchen {
    constructor() {
        this.chefs = [];
    }
    addChef(chef) {
        this.chefs.push(chef);
    }
    assignOrderToChef(order) {
        if (this.chefs.length === 0) {
            console.log("No chefs available to prepare the order.");
            return;
        }
        const assignedChef = this.chefs[Math.floor(Math.random() * this.chefs.length)];
        console.log(`Order ${order.orderId} assigned to Chef ${assignedChef.name}.`);
        assignedChef.prepareOrder(order);
    }
}

class Chef extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    prepareOrder(order) {
        console.log(`${this.name}: Preparing Order ${order.orderId}...`);
        setTimeout(() => {
            order.updateStatus("Ready");
            console.log(`${this.name}: Order ${order.orderId} is ready!`);
        }, 3000);
    }
}

class Reservation {
    constructor(customer, table, date, time) {
        this.customer = customer;
        this.table = table;
        this.date = date;
        this.time = time;
    }
}

class Menu {
    constructor() {
        this.sections = [];
    }
    addSection(section) {
        this.sections.push(section);
    }
    updateMenuItem(sectionName, itemName, newPrice, newCategory) {
        const section = this.sections.find(sec => sec.name === sectionName);
        if (section) {
            const item = section.items.find(item => item.name === itemName);
            if (item) {
                item.price = newPrice;
                item.category = newCategory;
            }
        }
    }
}

class MenuSection {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
    addMenuItem(menuItem) {
        this.items.push(menuItem);
    }
}

class MenuItem {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class OrderItem {
    constructor(menuItem, quantity) {
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
}

class Order {
    constructor(orderId, customer, table) {
        this.orderId = orderId;
        this.customer = customer;
        this.table = table;
        this.items = [];
        this.status = "Pending";
    }
    addItem(menuItem, quantity) {
        this.items.push(new OrderItem(menuItem, quantity));
    }
    updateStatus(status) {
        this.status = status;
    }
    notifyChef(kitchen) {
        console.log(`Order ${this.orderId} placed.`);
        kitchen.assignOrderToChef(this);
    }
}

class Payment {
    constructor(order, amount, method) {
        this.order = order;
        this.amount = amount;
        this.method = method;
    }
    processPayment() {
        return `Payment of $${this.amount} made using ${this.method} for Order ID ${this.order.orderId}`;
    }
}

class Customer {
    constructor(name, contact) {
        this.name = name;
        this.contact = contact;
    }
    makePayment(order, amount, method) {
        const payment = new Payment(order, amount, method);
        return payment.processPayment();
    }
    cancelReservation(branch, reservation) {
        branch.reservations = branch.reservations.filter(res => res !== reservation);
        reservation.table.freeTable(reservation.date, reservation.time);
    }
}

class Table {
    constructor(tableNumber, capacity) {
        this.tableNumber = tableNumber;
        this.capacity = capacity;
        this.reservations = [];
    }
    reserve(date, time) {
        this.reservations.push({ date, time });
    }
    freeTable(date, time) {
        this.reservations = this.reservations.filter(res => res.date !== date || res.time !== time);
    }
    isAvailableAt(date, time) {
        return !this.reservations.some(res => res.date === date && res.time === time);
    }
}

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Waiter extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    takeOrder(order, menuItem, quantity, kitchen) {
        order.addItem(menuItem, quantity);
        order.notifyChef(kitchen);
    }
}

// Creating objects
const restaurant = new Restaurant("Food Haven", "Downtown");
const branch1 = new Branch("Food Haven - East", "East Side");
restaurant.addBranch(branch1);

const table1 = new Table(1, 4);
branch1.addTable(table1);

const kitchen = branch1.kitchen;
const chef1 = new Chef("Gordon Ramsay", 5000);
kitchen.addChef(chef1);

const waiter = new Waiter("John Doe", 2000);
branch1.addEmployee(waiter);

const customer = new Customer("Alice Johnson", "123-456-7890");
const order = new Order(1, customer, table1);

const mainCourse = new MenuSection("Main Course");
const dessert = new MenuSection("Dessert");
branch1.menu.addSection(mainCourse);
branch1.menu.addSection(dessert);

const pasta = new MenuItem("Pasta", 12.99, "Main Course");
const cake = new MenuItem("Chocolate Cake", 5.99, "Dessert");
mainCourse.addMenuItem(pasta);
dessert.addMenuItem(cake);

waiter.takeOrder(order, pasta, 2, kitchen);
waiter.takeOrder(order, cake, 1, kitchen);
