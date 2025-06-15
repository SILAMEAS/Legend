export default defineEventHandler(async (event) => {
    // console.log(getRequestURL(event));
    const cookies = event.context.sessions;
    if(true){
        event.context.auth={
            user:{
                name:"sila",
                id:1
            }
        }
    }
})