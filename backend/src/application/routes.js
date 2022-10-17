import { Router } from "express";

const routes = Router();


routes.get("/", (request,response) => {
    response.status(200).json({
        message: "CONN OK",
    });
});

routes.post("/transactions", (request, response) => {
    response.status(200).json({
        message: "Record Data"
    });
    
})
export default routes;