class order {

    public state: string
    public products: product[];

    constructor(state: string, products: product[]) {
        this.state = state;
        this.products = [];
    }

    calculateTotal(): number {
        let total = 0;
        for (let product of this.products) {
            total += product.price;
        }
        return total;
    }
}


