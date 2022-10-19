import { Router } from "express";
import transactionRoutes from "./routes/transactions.js";
// import usersRouters from "./routes/userRoutes.js";

const routes = Router();

routes.use("/login", loginRoute)
routes.use("/users", usersRouters)
routes.use("/transactions", transactionRoutes)
export default routes;