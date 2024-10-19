import { Transaction } from '../entities/transaction';
import {
	CreateTransactionProps,
	GetTransactionFilters,
	GetTransactionReturnProps,
	TransactionUseCases,
} from '../interfaces/transaction';
import { TransactionRepository } from '../repositories/transaction';

export class TransactionInteractor implements TransactionUseCases {
	private repository: TransactionRepository;

	constructor(repository: TransactionRepository) {
		this.repository = repository;
	}
	async get(args: GetTransactionFilters): Promise<GetTransactionReturnProps | undefined> {
		try {
			const res = await this.repository.get(args);
			return res;
		} catch (error) {
			throw error;
		}
	}
	create(args: CreateTransactionProps): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
}
