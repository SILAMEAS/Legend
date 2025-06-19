// server/api/upload.post.ts
import { readMultipartFormData } from 'h3';
import { promises as fs } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

export default defineEventHandler(async (event) => {
    // Get multipart form data
    const formData = await readMultipartFormData(event);
    if (!formData || !formData.length) {
        throw createError({ statusCode: 400, message: 'No file uploaded' });
    }

    // Determine upload directory
    const uploadDir = process.env.NODE_ENV === 'production' ? tmpdir() : join(process.cwd(), 'public/uploads');
    await fs.mkdir(uploadDir, { recursive: true }).catch(() => {});

    // Process the file
    const file = formData.find((item) => item.name === 'file'); // 'file' is the form field name
    if (!file) {
        throw createError({ statusCode: 400, message: 'File field not found' });
    }

    // Generate a unique filename
    const filename = `${Date.now()}-${file.filename}`;
    const filePath = join(uploadDir, filename);

    // Write file to disk
    await fs.writeFile(filePath, file.data);

    return {
        message: 'File uploaded successfully',
        path: filePath,
        url: process.env.NODE_ENV === 'production' ? null : `/uploads/${filename}`, // Serve locally
    };
});