import { TransactionsRepository } from "../../repositories/TransactionsRepository";



export class CreateTransaction {
    constructor() {
        this.TransactionsRepository = TransactionsRepository.getInstance();

    }

    execute({title, idUserTransaction, type, transaction_id,amount,creation_date}) {

        const transactionIdSearch = this.TransactionsRepository.findByTransactionID(idUserTransaction);
        const emailExists = this.UserRepository.findByEmail(email);
        
        if (transactionIdSearch && emailExists) {
            throw new AppException(400, "Transaction Already Computed")
        }
        
        const transaction = this.TransactionsRepository.create({
            title, 
            idUserTransaction, 
            type, 
            transaction_id,
            amount,
            creation_date
        });
        return transaction;
    }
}