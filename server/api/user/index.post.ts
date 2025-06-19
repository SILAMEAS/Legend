// server/api/test-user.ts
import { prisma } from '~/lib/prisma'

export default defineEventHandler(async () => {
    const user = await prisma.user.create({
        data: { email: 'test@test.com', name: 'Meas Sila' },
    })

    return user
})
