import { Product } from './Product';

export class Order {
    public products: Product[] = [];
    public isApproved: boolean = false;
    public isPaid: boolean = false;

    constructor(
        public id: number,
        public state: string = "Prepare Requisition" // Estado inicial según el diagrama
    ) {}

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
}