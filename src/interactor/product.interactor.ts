import { GiConsoleController } from 'react-icons/gi';
import {
	GetProductFiltersProps,
	GetProductReturnProps,
	ProductUseCase,
} from '../interfaces/product.interfaces';
import { ProductRepository } from '../repositories/product.repository';

export class ProductInteractor implements ProductUseCase {
	private repository: ProductRepository;

	constructor(repository: ProductRepository) {
		this.repository = repository;
	}

	async get(args: GetProductFiltersProps): Promise<GetProductReturnProps | undefined> {
		try {
			const res = await this.repository.get(args);
			console.log('productInteractror: ', res);
			return res;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
