import {ProductCategory} from "./product-category";

export interface Product {
    id: number;
    product_name: string;
    product_category: ProductCategory;
    product_price: number;
    product_description ?: string;
    transaction_detail :
}