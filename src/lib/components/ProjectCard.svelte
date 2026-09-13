<script lang="ts">
    import Pushable from '$lib/components/Pushable.svelte';

    export let index: number;
    export let title: string;
    export let description: string;
    export let tech: string[];
    export let githubUrl: string;
    export let liveUrl: string | undefined = undefined;
    export let image: string;

    let onHover: (e: MouseEvent) => void;
</script>

<div
    class="max-w-[92vw] flex flex-col sm:flex-row items-center gap-10 px-6 py-8 motion-safe:animate-card-float motion-reduce:animate-none"
    on:mousemove={onHover}
    role="region"
>
    <Pushable bind:onHover intensity={6} class="shrink-0">
        <img
            class="rounded-2xl border border-gray-300 drop-shadow-xl max-h-[36rem] sm:max-h-[min(70vh,40rem)] max-w-full sm:max-w-[min(45vw,48rem)]"
            src={image}
            alt="{title} screenshot"
        />
    </Pushable>
    <div
        class="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left sm:max-w-sm"
    >
        <h2 class="text-3xl">
            <span class="text-orange-500 font-bold">{String(index).padStart(2, '0')}.</span>
            {title}
        </h2>
        <p>{description}</p>
        <div class="flex gap-2 flex-wrap justify-center sm:justify-start">
            {#each tech as t}
                <span class="text-xs rounded-full bg-gray-200 px-3 py-1">{t}</span>
            {/each}
        </div>
        <div class="flex gap-3">
            <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 px-4 py-2 text-sm font-medium"
            >
                <svg viewBox="0 0 16 16" class="w-4 h-4 fill-current" aria-hidden="true">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
                        1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                        0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04
                        2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54
                        1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
                    />
                </svg>
                GitHub
            </a>
            {#if liveUrl}
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    class="flex items-center gap-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 px-4 py-2 text-sm font-medium"
                >
                    Live demo
                    <svg viewBox="0 0 20 20" class="w-4 h-4 fill-current" aria-hidden="true">
                        <path
                            d="M11 3a1 1 0 1 0 0 2h2.59l-6.3 6.29a1 1 0 0 0 1.42 1.42L15 6.41V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5Z"
                        />
                        <path
                            d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5Z"
                        />
                    </svg>
                </a>
            {/if}
        </div>
    </div>
</div>
