import { prisma } from "../../../../application/database/prismaClient.js";


export class updateTransaction {
    

    async execute({id, title, type, category, amount}) {
        await prisma.$connect();


        const updateTransaction = await prisma.transaction.update({
            where: {
                id,
            },
            data: {
                title,
                type,
                category,
                amount
            },

        });

        await prisma.$disconnect();
        
        return updateTransaction;
    }
}