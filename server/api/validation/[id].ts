import {BadRequestException} from "~/server/utils/handleRequest";

export default defineEventHandler((event) => {
    const idParam = getRouterParam(event, 'id')
    const id = Number(idParam)

    if (!Number.isInteger(id)) {
        return BadRequestException(event, 'ID must be an integer')
    }

    return {message: "Valid ID", id}
})
