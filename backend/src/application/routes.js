import { Router } from "express";
import transactionRoutes from "./routes/transactions.js";

//import {usersRoutes} from "./routes/usersRoutes.js";

const routes = Router();

// routes.use("/login", loginRoute)
//routes.use("/users", usersRoutes)
routes.use(transactionRoutes)
export default routes;