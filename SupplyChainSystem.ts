import { Order } from './Order';

export class SupplyChainSystem {
    public orders: Order[] = [];

    // --- Shipping Office Role ---
    addRequisition(order: Order): void {
        this.orders.push(order);
        console.log(`[Shipping Office] Requisition ${order.id} prepared.`);
        this.renderVisual();
    }

    // --- Supervisor Role ---
    evaluateQuote(id: number, approved: boolean): void {
        const order = this.orders.find(o => o.id === id);
        if (order) {
            order.isApproved = approved;
            order.state = approved ? "Quote Approved" : "Quote Rejected";
            console.log(`[Supervisor] Order ${id} approval status: ${approved}`);
            this.renderVisual();
        }
    }

    // --- Seller Role ---
    prepareActualQuote(id: number): void {
        const order = this.orders.find(o => o.id === id);
        if (order) {
            order.state = "Actual Quote Preparation";
            console.log(`[Seller] Preparing actual quote for order ${id}`);
            this.renderVisual();
        }
    }

    // --- Receive Agent Role ---
    receiveProduct(id: number): void {
        const order = this.orders.find(o => o.id === id);
        if (order) {
            order.state = "Receive Ordered Product";
            order.isPaid = true;
            console.log(`[Receive Agent] Product for order ${id} received and payment processed.`);
            this.renderVisual();
        }
    }

    // --- Lógica de Interfaz ---
    renderVisual(): void {
        const display = document.getElementById('display');
        if (display) {
            display.innerHTML = '';
            this.orders.forEach(o => {
                display.innerHTML += `
                    <div class="order-card" style="border: 1px solid #ccc; padding: 10px; margin: 10px; border-radius: 8px;">
                        <strong>ID: ${o.id}</strong> | Status: <span style="color: blue">${o.state}</span><br>
                        Total: $${o.calculateTotal()} | Approved: ${o.isApproved ? '✅' : '❌'}
                        <br>
                        <button onclick="window.processNextStep(${o.id})">Avanzar Proceso</button>
                    </div>`;
            });
        }
    }
}