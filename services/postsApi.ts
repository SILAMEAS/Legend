// services/postsApi.ts
export const getPosts = async () => {
    try {
        return await $fetch('https://jsonplaceholder.typicode.com/posts')
    } catch (error) {
        throw new Error('Failed to fetch posts')
    }
}
