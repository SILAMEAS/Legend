// stores/posts.ts
import { defineStore } from 'pinia'
import { getPosts } from '@/services/postsApi'

export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [] as Array<{ id: number; title: string }>,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchPosts() {
            this.loading = true
            this.error = null
            try {
                this.posts = await getPosts()
            } catch (err: any) {
                this.error = err.message || 'Unknown error'
            } finally {
                this.loading = false
            }
        }
    }
})
