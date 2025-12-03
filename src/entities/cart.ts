import {TransactionDetail} from "./transaction-detail";

export class Cart {
    constructor(
        public readonly id: number,
        public readonly customer_name: string,
        public readonly transaction_detail: TransactionDetail,
    ) {
    }
}