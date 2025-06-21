import { prisma } from '~/lib/prisma'


export default defineEventHandler(async (event) => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error("Prisma error:", error);
        throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
    }
});
