import { readBody, defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    const response = await $fetch('https://uploadthing.com/api/uploadFiles', {
        method: 'POST',
        headers: {
            'x-uploadthing-api-key': config.uploadthingSecret,
            'x-uploadthing-app-id': config.public.uploadthingAppId,
            'ut-version': '5.0.0',
            'content-type': 'application/json',
        },
        body: {
            files: [
                {
                    name: body.name,
                    type: body.type,
                    size: body.size, // ✅ add this
                },
            ],
            route: 'imageUploader',
        },
    })

    return response
})
