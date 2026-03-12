import { Order } from './Order';

export class BuyerAgent {
    // Procesa la requisición para crear una solicitud de cotización (RFQ)
    prepareRequestForQuote(order: Order): void {
        order.state = "Prepare request for quote";
        console.log(`[Buyer Agent] RFQ preparada para la orden ${order.id}`);
    }

    // Evalúa si la cotización necesita revisión del supervisor
    needsReview(order: Order): boolean {
        // Lógica: por ejemplo, si el total supera los $100 requiere revisión
        return order.calculateTotal() > 100;
    }
}