import {Product} from "../entities/product";

export interface GetProductFiltersProps {
    page: number,
    page_size: number,
    sort: 'asc' | 'desc',
    product_name?: string,
    product_category_id?: number,
}

export interface GetProductReturnProps {
    total: number;
    data: Product[];
}

export interface ProductUseCase {
    get(args: GetProductFiltersProps): Promise<GetProductReturnProps | undefined>;
}

export interface IProductController {
    get(args: GetProductFiltersProps): Promise<GetProductReturnProps | undefined>;
}