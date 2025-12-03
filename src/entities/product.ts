import {ProductCategory} from "./product-category";
import {TransactionDetail} from "./transaction-detail";
import {ProductImage} from "./product-image";

export class Product {
    constructor(
        public readonly id: number,
        public readonly product_name: string,
        public readonly product_category: ProductCategory,
        public readonly product_price: number,
        public readonly transaction_detail: TransactionDetail,
        public readonly product_image?: ProductImage,
        public readonly product_description?: string
    ) {
    }
}
