import {Product} from "./product";

export class ProductImage {
    constructor(
        public readonly id: number,
        public readonly image_url: string,
        public readonly product: Product,
        public readonly product_id: number
    ) {
    }
}