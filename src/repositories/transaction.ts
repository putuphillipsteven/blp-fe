import axios from 'axios';
import {
	CreateTransactionProps,
	GetTransactionFilters,
	TransactionUseCases,
} from '../interfaces/transaction';
import { Transaction } from '../entities/transaction';

export class TransactionRepository implements TransactionUseCases {
	create(args: CreateTransactionProps): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
	async get(args: GetTransactionFilters) {
		const { endDate, page, pageSize, startDate } = args;
		const res = await axios.get(
			`${import.meta.env.VITE_APP_API_URL}/transaction?page=${page}&pageSize=${pageSize}&startDate=${startDate}&endDate=${endDate}`,
		);
		return res?.data?.data?.data;
	}
}
