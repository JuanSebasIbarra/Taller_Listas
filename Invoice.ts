import { Product } from './Product';

export class Invoice {
    public date: Date;
    constructor(
        public orderId: number,
        public items: Product[],
        public total: number
    ) {
        this.date = new Date();
    }
}