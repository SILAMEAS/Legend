// server/api/upload.ts
import formidable from 'formidable'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { mkdirSync, existsSync } from 'fs'

export const config = {
    api: {
        bodyParser: false,
    },
}

export default defineEventHandler(async (event) => {
    const form = formidable({ multiples: false })

    const { fields, files } = await new Promise<any>((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if (err) reject(err)
            else resolve({ fields, files })
        })
    })

    const uploadedFile = files.file || Object.values(files)[0]

    if (!uploadedFile) {
        throw createError({
            statusCode: 400,
            statusMessage: 'No file uploaded',
        })
    }

    const file = Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile

    // ✅ Read file content from temporary path
    const buffer = await readFile(file.filepath)

    const fileName = `${Date.now()}-${file.originalFilename}`
    const uploadDir = join(process.cwd(), 'public/uploads')

    if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true })

    const filePath = join(uploadDir, fileName)
    await writeFile(filePath, buffer)

    return { url: `/uploads/${fileName}` }
})
