// server/api/upload.ts
import { defineEventHandler, readMultipartFormData } from 'h3'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { nanoid } from 'nanoid'

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event)
    const file = formData?.find((f) => f.name === 'file' && f.type === 'file')

    if (!file || !file.data || !file.filename) {
        return { error: 'No file uploaded' }
    }

    // Use one unified path logic
    const isVercel = process.env.VERCEL === '1'
    const uploadDir = isVercel ? '/tmp/uploads' : './public/uploads'

    await mkdir(uploadDir, { recursive: true })

    const ext = file.filename.split('.').pop()
    const uniqueFilename = `${nanoid()}.${ext}`
    const filePath = join(uploadDir, uniqueFilename)

    await writeFile(filePath, file.data)

    // Return proper image URL or temp path
    const fileUrl = isVercel
        ? `temporary://${uniqueFilename}`
        : `/uploads/${uniqueFilename}`

    return {
        message: 'Uploaded successfully',
        url: fileUrl,
        filename: uniqueFilename,
        environment: isVercel ? 'vercel' : 'local',
    }
})
