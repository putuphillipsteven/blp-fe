import {Product} from "../entities/product";

export interface GetProductFilters {
    page: number,
    page_size: 10,
    sort: 'asc' | 'desc',
    product_category_id: number,
    product_name: string,
}

export interface ProductUseCase {
    get(args: GetProductFilters): Promise<Product | undefined>;
}