import { Order } from './Order';

export class Seller {
    prepareActualQuote(order: Order): void {
        order.state = "Actual quote preparation";
        console.log(`[Seller] Generando cotización formal para la orden ${order.id}`);
    }

    analyzeResponse(order: Order): void {
        order.state = "Analyze quote response";
        console.log(`[Seller] Analizando respuesta de la orden ${order.id}`);
    }
}