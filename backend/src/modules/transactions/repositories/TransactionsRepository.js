import {Transactions} from "../models/Transaction.js";

export class TransactionsRepository {
    transactions;

    static INSTANCE;

    constructor() {
        this.transactions = [];
    }


    static getInstance(){
        if(!TransactionsRepository.INSTANCE) {
            TransactionsRepository.INSTANCE = new TransactionsRepository();
        }
        return TransactionsRepository.INSTANCE;
    }
    create({title, idUserTransaction, type, transaction_id,amount,creation_date}) {
        const transaction = new Transaction();
    
        Object.assign(transaction, {
            title,
            idUserTransaction,
            type,
            transaction_id,
            amount,
            creation_date: new Date()
        })
       this.transactions.push(transaction);
       return transaction;

    }

    list() {
        return this.transactions;
    }
    findByTransactionName() {
        return this.transactions.find((userTransaction) => transaction.userTransaction === userTransaction);

    }
    
}


