export default defineEventHandler(async (event) => {
    // console.log(getRequestURL(event));
    const context = event.context;
    if(true){
        context.auth={
            user:{
                name:"sila",
                id:1
            }
        }
    }
})