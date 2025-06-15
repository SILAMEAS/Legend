import {defineStore} from 'pinia'

interface Post {
    id: number
    title: string
}

export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [] as Post[],
        loading: false,
        error: null as string | null,
    }),

    actions: {
        savePost(data: Post[]) {
            this.posts = data;
        },
    },
})
