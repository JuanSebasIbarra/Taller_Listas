import { Order } from './Order';

export class ReceiveAgent {
    receiveProduct(order: Order): void {
        order.state = "Receive ordered product";
        console.log(`[Receive Agent] Producto de la orden ${order.id} recibido físicamente`);
    }

    prepareInvoice(order: Order): void {
        order.state = "Prepare order invoice";
        console.log(`[Receive Agent] Generando factura para la orden ${order.id}`);
    }

    confirmPayment(order: Order): void {
        order.isPaid = true;
        order.state = "Receive payment from customer";
        console.log(`[Receive Agent] Pago confirmado para la orden ${order.id}. Proceso finalizado.`);
    }
}