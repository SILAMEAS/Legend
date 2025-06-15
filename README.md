# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```


### example of using fetch data


####Fetch todo item

    const { data, pending, error } = await useAsyncData<{ id: number; title: string; completed: boolean }>(
    'todo-1',
    () => $fetch('https://jsonplaceholder.typicode.com/todos/1'),
    {
    immediate: true,
    }
    )
    
    onMounted(() => {
    console.log('Swiper instance:', swiper.instance)
    console.log('Todo data:', data.value)
    })


    <script setup lang="ts">
    import { useRoute, useAsyncData } from 'nuxt/app'
    
    const route = useRoute()
#### Fetch posts with useAsyncData

    const { data: posts, pending, error, refresh } = await useAsyncData<Array<{ id: number; title: string }>>(
        `posts-${route.fullPath}`, // Unique key to avoid cache collisions
        () => $fetch('https://jsonplaceholder.typicode.com/posts'),
        {
          immediate: true, // Fetch immediately on mount
          watch: [route], // Re-fetch when route changes
          dedupe: 'cancel', // Cancel duplicate requests during navigation
        }
    )
    
    // Debug: Log data updates
    watch(posts, (newPosts) => {
      console.log('Posts updated:', newPosts)
    })
    </script>


Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
