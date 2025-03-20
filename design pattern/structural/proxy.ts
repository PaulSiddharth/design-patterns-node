interface IOrder {
    fulfillOrder(): void;
}

class Warehouse implements IOrder {

    fulfillOrder() {
        console.log('Warehouse: Fulfilling order');
    }
}

class OrderFulfillment implements IOrder {
    private warehouse: Warehouse[];

    constructor(warehouse: Warehouse) {
        this.warehouse = [warehouse];
    }

    addWarehouse(warehouse: Warehouse) {
        this.warehouse.push(warehouse);
    }

    fulfillOrder() {
        console.log('Order fulfillment: Checking and packaging order');
        this.warehouse[0].fulfillOrder();
    }
}