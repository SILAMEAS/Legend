export const useImageUpload = () => {
    const uploadImage = async (file: File): Promise<string | null> => {
        try {
            const formData = new FormData()
            formData.append('file', file)

            const res = await $fetch<{ url: string }>('/api/upload', {
                method: 'POST',
                body: formData,
            })

            return res.url
        } catch (error) {
            console.error('[Image Upload Error]', error)
            return null
        }
    }

    return { uploadImage }
}
