import { Order } from './Order';

export class Supervisor {
    evaluateQuoteRequest(order: Order): void {
        order.state = "Quote request evaluation";
        console.log(`[Supervisor] Evaluando solicitud de la orden ${order.id}`);
    }

    approveOrder(order: Order, status: boolean): void {
        order.isApproved = status;
        order.state = status ? "Approved" : "Rejected";
        console.log(`[Supervisor] Orden ${order.id} ${status ? 'Aprobada' : 'Rechazada'}`);
    }
}