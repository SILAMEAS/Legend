import {prisma} from "~/lib/prisma";


export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        return await prisma.user.create({data:{
                email :"test@test.com",
                name:'Meas sila'
            }})
    }catch (error) {
        console.error(error);
    }
});

