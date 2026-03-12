
class Product {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
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

// 3. Sistema de Restaurante
class RestaurantSystem {
    public orderList: Order[] = [];

    addOrder(order: Order): void {
        this.orderList.push(order);
        console.log(`✅ Order ${order.id} added.`);
    }

    searchOrderById(id: number): Order | undefined {
        return this.orderList.find(o => o.id === id);
    }

    showAllOrders(): void {
        console.log("\n--- Current Orders list ---");
        this.orderList.forEach(o => {
            console.log(`- Order ${o.id} | State: ${o.state} | $${o.totalAmount}`);
        });
    }

    changeStateOfOrder(id: number, newState: string): void {
        const order = this.searchOrderById(id);
        if (order) {
            order.state = newState;
            console.log(`🚀 Order ${id} changed to ${newState}`);
        }
    }

    organizeOrdersByState(): void {
        this.orderList.sort((a, b) => a.state.localeCompare(b.state));
        console.log("📊 Orders organized by state.");
    }

    deleteOrder(id: number): void {
        const index = this.orderList.findIndex(o => o.id === id);
        if (index !== -1) {
            this.orderList.splice(index, 1);
            console.log(`🗑️ Order ${id} deleted.`);
        }
    }
}

// === MAIN ===
const system = new RestaurantSystem();
console.log("=== SIMULATION STARTING ===");

system.addOrder(new Order(1, "Requested", 45.0));
system.addOrder(new Order(2, "Requested", 32.5));

system.changeStateOfOrder(1, "Cooking");
system.showAllOrders();

system.organizeOrdersByState();
system.deleteOrder(1);

console.log("\n=== FINAL STATE ===");
system.showAllOrders();