export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, 'name')
    const body = await readBody(event)
    const query = getQuery(event)
    const cookies = parseCookies(event)
    const message=`Hello, ${name}! from Post`;
    return {message,body,query,cookies}
})