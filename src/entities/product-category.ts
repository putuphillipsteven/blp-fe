// export interface ProductCategory {
//     id: number;
//     name: string;
//     parent?: ProductCategory;
//     parent_id: number;
//     subcategories: ProductCategory;
// }

export class ProductCategory {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly parent_id: number,
        public readonly sub_categories: number,
        public readonly parent?: ProductCategory
    ) {
    }
}
