class NotFoundErrors extends Error{
 constructor(message){
    super(message);
    this.name="NotFoundErrors";
 }
}

export default NotFoundErrors;