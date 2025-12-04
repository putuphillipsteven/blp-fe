import {
    GetTransactionFilters,
    TransactionUseCases,
} from '../interfaces/transaction';
import {ITransactionController} from "../interfaces/transaction";

export class TransactionController implements ITransactionController {
    private interactor: TransactionUseCases;

    constructor(interactor: TransactionUseCases) {
        this.interactor = interactor;
    }

    async create(filter: GetTransactionFilters) {
        try {
            const transaction = await this.interactor.get(filter);
            return transaction;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async get(filter: GetTransactionFilters) {
        try {
            const res = await this.interactor.get(filter);
            return res;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
