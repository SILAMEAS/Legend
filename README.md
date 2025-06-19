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

### state management ingine

    const todo = useState("todo",()=>data);  // set

    const todo = useState("todo"); // calling to use other page


### Switper JS

    <!-- Swiper -->
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide
            v-for="(slide, idx) in slides"
            :key="idx"
            style="background-color: rgb(32, 233, 70); color: white;"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <button @click="swiper.prev()">Prev</button>
    <button @click="swiper.next()">Next</button>


    swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    }

### Pinia

    <script setup lang="ts">
    const counter = useCounterStore()
    </script>

    <div class="p-4">
    <h1 class="text-2xl font-bold">Counter: {{ counter.count }}</h1>
    <button @click="counter.increment" class="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
    <button @click="counter.decrement" class="bg-blue-500 text-white px-4 py-2 rounded ml-2">Decrement</button>
    </div>


### Command Run in Shadcn

    npx shadcn-vue@latest add button


### Clear 

    rm -rf .nuxt node_modules





Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
