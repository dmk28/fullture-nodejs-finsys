import  {TransactionsRepository } from "../../repositories/TransactionsRepository.js";



export class CreateTransaction {
    constructor() {
        this.transactionsRepository = TransactionsRepository.getInstance();

    }

    execute({title, type, category, amount}) {

        
    
        const transaction = this.transactionsRepository.create({
            title, 
            type, 
            category,
            amount,
            
        });
        return transaction;
    }
}