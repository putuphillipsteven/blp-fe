import { GetProductFiltersProps, ProductUseCase } from '../interfaces/product.interfaces';
import axios from 'axios';

export class ProductRepository implements ProductUseCase {
	async get(args: GetProductFiltersProps) {
		const { page, page_size, product_category_id, product_name } = args;
		const res = await axios.get(
			`${
				import.meta.env.VITE_APP_API_URL
			}/products?page=${page}&sort=asc&pageSize=${page_size}&product_name=${
				product_name ? product_name : ''
			}`,
		);
		console.log('productRepo: ', res?.data?.data);
		return res?.data?.data;
	}
}
