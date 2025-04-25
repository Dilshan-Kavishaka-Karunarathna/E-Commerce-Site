import express from 'express';


const app = express();

import {getProducts,createProducts,getProduct,deleteProduct, updateProduct} from './application/product.js';

import {productRouter} from './api/product.js'
import globalErrorHandlingMiddleware from './api/middleware/globalErrorHandlingMiddleware.js';
import { connectDB } from './infrastructure/schemas/db.js';

app.use(express.json());

app.use((req,res,next)=>{
    console.log("Request Recived");
    console.log(req.method,req.url);
    next();

})



app.use('/api/products',productRouter)
app.use(globalErrorHandlingMiddleware)

connectDB();
app.listen(8000 ,() => {console.log(`server is running on port ${8000}`)});