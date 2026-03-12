import { Product } from './Product';
import { Order } from './Order';
import { SupplyChainSystem } from './SupplyChainSystem';

const system = new SupplyChainSystem();

// Exponer funciones al navegador (window)
(window as any).createOrder = () => {
    const id = Math.floor(Math.random() * 1000);
    const newReq = new Order(id); // Shipping Office inicia
    newReq.addProduct(new Product(1, "Insumos UCC", 150.0));
    system.addRequisition(newReq);
};

(window as any).processNextStep = (id: number) => {
    const order = system.orders.find(o => o.id === id);
    if (!order) return;

    // Simulación del flujo del diagrama
    if (order.state === "Prepare Requisition") {
        system.prepareActualQuote(id); // Pasa al Seller
    } else if (order.state === "Actual Quote Preparation") {
        system.evaluateQuote(id, true); // Pasa al Supervisor
    } else if (order.state === "Quote Approved") {
        system.receiveProduct(id); // Pasa al Receive Agent
    } else {
        alert("El proceso para esta orden ha finalizado.");
    }
};

console.log("Sistema de Cadena de Suministro UCC - Cargado");