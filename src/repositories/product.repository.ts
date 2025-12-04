import {GetProductFiltersProps, ProductUseCase} from "../interfaces/product.interfaces";
import axios from "axios";

export class ProductRepository implements ProductUseCase {
    async get(args: GetProductFiltersProps) {
        const {page, page_size, product_category_id, product_name} = args;
        const res = await axios.get(
            `${import.meta.env.VITE_APP_API_URL}/transaction?page=${page}&pageSize=${page_size}&product_category_id=${product_category_id}&product_name=${product_name}`,
        );
        return res?.data?.data?.data;
    }
}