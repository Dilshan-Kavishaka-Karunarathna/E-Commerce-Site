const globalErrorHandlingMiddleware=(Error,req,res,next)=>{
    console.log(Error);
    if(Error.name==="NotFoundErrors"){
        return res.status(404).json(
            {
                message:Error.message,
                
            }
        )
        .send();
    }
    else{
        return res.status(500).json({massage:"Internal Server Error"}).send();
    }

};
export default globalErrorHandlingMiddleware;
   
