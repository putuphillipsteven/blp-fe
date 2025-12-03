import {Transaction} from "./transaction";
import {Product} from "./product";
import {Cart} from "./cart";

export class TransactionDetail {
    constructor(
        public readonly id: number,
        public readonly transaction: Transaction,
        public readonly transaction_id: number,
        public readonly product: Product,
        public readonly qty: number,
        public readonly cart: Cart,
        public readonly cart_id?: number,
        public readonly total_price?: number,
    ) {
    }
}
