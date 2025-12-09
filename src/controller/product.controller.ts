import {
	GetProductFiltersProps,
	IProductController,
	ProductUseCase,
} from '../interfaces/product.interfaces';

export class ProductController implements IProductController {
	private interactor: ProductUseCase;

	constructor(interactor: ProductUseCase) {
		this.interactor = interactor;
	}

	async get(args: GetProductFiltersProps) {
		try {
			const product = await this.interactor.get(args);
			// console.log('productController: ', product);
			return product;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
