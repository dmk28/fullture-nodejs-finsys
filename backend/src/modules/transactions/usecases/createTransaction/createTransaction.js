import  {TransactionsRepository } from "../../repositories/TransactionsRepository.js";



export class CreateTransaction {
    constructor() {
        this.TransactionsRepository = TransactionsRepository.getInstance();

    }

    execute({title, type, category, amount, creation_date}) {

        const transactionIdSearch = this.TransactionsRepository.findByTransactionID(idUserTransaction);
        const emailExists = this.UserRepository.findByEmail(email);
        
        if (transactionIdSearch && emailExists) {
            throw new AppException(400, "Transaction Already Computed")
        }
        
        const transaction = this.TransactionsRepository.create({
            title, 
            type, 
            category,
            amount,
            creation_date
        });
        return transaction;
    }
}