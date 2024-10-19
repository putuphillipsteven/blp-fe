import { Transaction } from '../entities/transaction';

export interface CreateTransactionProps {
	user_id: number;
	payment_method_id: number;
	payment_amount: number;
	payment_change: number;
}

export interface GetTransactionReturnProps {
	total: string;
	data: Transaction[];
}

export interface GetTransactionFilters {
	startDate: string;
	endDate: string;
	page: string;
	pageSize: string;
}

export interface TransactionUseCases {
	create(args: CreateTransactionProps): Promise<Transaction | undefined>;
	get(args: GetTransactionFilters): Promise<GetTransactionReturnProps | undefined>;
}

export interface ITransactionController {
	create(args: CreateTransactionProps): any;
	get(args: GetTransactionFilters): Promise<GetTransactionReturnProps | undefined>;
}
