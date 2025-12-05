import {Product} from "../entities/product";

export interface GetProductFiltersProps {
    page: number,
    page_size: 10,
    sort: 'asc' | 'desc',
    product_category_id: number,
    product_name: string,
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