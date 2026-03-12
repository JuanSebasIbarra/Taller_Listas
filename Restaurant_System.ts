export class Order {

    constructor(public id: number, public state: string) {}
 
    public orderList: Order[] = [];


    addOrder(order: Order): void {
        this.orderList.push(order);
        console.log(`Order ${order.id} added to the system.`);
    }

    searchOrderById(id: number): Order | undefined {
        const foundOrder = this.orderList.find(order => order.id === id);
        return foundOrder; 
    }

    showAllOrders(): void {
        console.log("All Orders list:");
        this.orderList.forEach(order => {
            console.log(`- Order ${order.id} | State: ${order.state}`);
        });
    }

    changeStateOfOrder(id: number, newState: string): void {
        const order = this.searchOrderById(id);
        if (order) {
            order.state = newState;
            console.log(`Order ${id} state changed to ${newState}.`);
        } else {
            console.log(`Order with id ${id} not found.`);
        }
    }

    organizeOrdersByState(): void {
        this.orderList.sort((a, b) => a.state.localeCompare(b.state));
        console.log("Orders organized by state.");
    }

    deleteOrder(id: number): void {
        const index = this.orderList.findIndex(order => order.id === id);
        
        if (index !== -1) { 

            this.orderList.splice(index, 1);
            console.log(`Order ${id} deleted successfully.`);
        } else {
            console.log(`Order ${id} not found to delete.`);
        }
    }
} 
