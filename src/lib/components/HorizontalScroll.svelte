<script lang="ts">
    export let vw: number;

    import { browser } from '$app/environment';
    import { clamp, isSm } from '$lib/util';
    import { onDestroy, onMount } from 'svelte';

    let track: HTMLDivElement;
    let content: HTMLDivElement;
    let windowWidth = browser ? window.innerWidth : 0;
    let windowHeight = browser ? window.innerHeight : 0;

    $: widthPx = (vw / 100) * windowWidth;
    $: excessScroll = widthPx - windowWidth;
    $: trackHeightPx = widthPx + windowHeight;
    $: if (track) {
        track.style.height = $isSm && widthPx ? `${trackHeightPx}px` : '';
        if (!$isSm && content) content.style.transform = '';
    }

    onMount(() => {
        if (browser) {
            window.addEventListener('scroll', onScroll);
            window.addEventListener('resize', onResize);
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            if (scrollRafId !== null) cancelAnimationFrame(scrollRafId);
        }
    });

    function onResize() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    }

    let scrollRafId: number | null = null;

    function onScroll() {
        if (scrollRafId !== null) return;
        scrollRafId = requestAnimationFrame(() => {
            scrollRafId = null;
            applyScroll();
        });
    }

    function applyScroll() {
        if (!$isSm || !track || !content) return;

        const offsetTop = track.offsetTop;
        const scrollPx = clamp(window.scrollY - offsetTop, 0, excessScroll);

        content.style.transform = `translate3d(${-scrollPx}px, 0, 0)`;
    }
</script>

<div bind:this={track} class="w-screen m-0 gap-0">
    <div class="relative w-screen top-0 sm:sticky sm:h-screen sm:overflow-hidden sm:flex sm:flex-col">
        <div class="w-auto h-auto">
            <slot name="sticky" />
        </div>
        <div
            bind:this={content}
            class="hscroll-content flex flex-col sm:flex-1 items-center will-change-transform"
            style={$isSm ? `width: ${vw}vw` : ''}
        >
            <slot />
        </div>
    </div>
</div>

<style>
    @media (min-width: 640px) {
        .hscroll-content {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 100vw;
            align-items: center;
            justify-items: center;
        }
    }
</style>
