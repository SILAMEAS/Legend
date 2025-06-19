import {prisma} from "~/lib/prisma";


export default defineEventHandler(async (event) => {
    console.log("event", event);
    return {
        user: await prisma.user.findFirst(),
    };
});

