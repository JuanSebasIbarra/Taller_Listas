
class Product {
    constructor(public name: string, public price: number) {}
}

class Order {

    public id: number;
    public state: string;
    public totalAmount: number;
    public products: Product[];

    constructor(id: number, state: string, totalAmount: number) {
        this.id = id;
        this.state = state;
        this.totalAmount = totalAmount;
        this.products = []; 
    }
}

class RestaurantSystem {
    public orderList: Order[] = [];

    addOrder(order: Order): void {
        this.orderList.push(order);
        console.log(`Order ${order.id} added.`);
    }

    searchOrderById(id: number): Order | undefined {
        return this.orderList.find(order => order.id === id);
    }

    showAllOrders(): void {
        console.log("\n--- Current Orders ---");
        this.orderList.forEach(order => {
            console.log(`- ID: ${order.id} | Status: ${order.state} | Total: $${order.totalAmount}`);
        });
    }

    changeStateOfOrder(id: number, newState: string): void {
        const order = this.searchOrderById(id);
        if (order) {
            order.state = newState;
            console.log(`🚀 Order ${id} is now: ${newState}`);
        }
    }

    organizeOrdersByState(): void {
        this.orderList.sort((a, b) => a.state.localeCompare(b.state));
        console.log("📊 Orders organized by state.");
    }

    deleteOrder(id: number): void {
        const index = this.orderList.findIndex(order => order.id === id);
        if (index !== -1) {
            this.orderList.splice(index, 1);
            console.log(`🗑️ Order ${id} deleted.`);
        }
    }
}


const system = new RestaurantSystem();

console.log("🏁 SIMULATION STARTING");

const order1 = new Order(1, "Requested", 45.00);
const order2 = new Order(2, "Requested", 32.50);
const order3 = new Order(3, "Requested", 15.00);

system.addOrder(order1);
system.addOrder(order2);
system.addOrder(order3);

system.changeStateOfOrder(1, "Cooking");
system.changeStateOfOrder(2, "Served");

const orderToBill = system.searchOrderById(1);
if (orderToBill) {
    console.log(`[Caja] Total to pay for Order ${orderToBill.id}: $${orderToBill.totalAmount}`);
}

system.organizeOrdersByState();
system.showAllOrders();

console.log("SIMULATION ENDING");
system.deleteOrder(1);
system.showAllOrders();