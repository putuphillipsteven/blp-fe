export interface ProductCategory {
    id: number;
    name: string;
    parent?: ProductCategory;
    parent_id: number;
    subcategories: ProductCategory;
}