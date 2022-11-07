
import { DeleteTransaction } from "./deleteTransactions.js";

export class DeleteTransactionController {
    constructor() {
        this.deleteTransactions = new DeleteTransaction();
    }

    handle (request, response) {
        const {id} = request.params;

        this.deleteTransactions.execute(id);

        return response.status(204).send();
    }
}