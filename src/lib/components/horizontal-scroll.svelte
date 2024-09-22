<script lang="ts">
    export let vw: number;

	import { browser } from "$app/environment";
	import { clamp } from "$lib/util";
	import { onDestroy, onMount } from "svelte";

    let track: HTMLDivElement;
    let content: HTMLDivElement;
    let windowWidth = browser ? window.innerWidth : 0;

    $: widthPx = vw/100 * windowWidth;
    $: excessScroll = widthPx - windowWidth;
    $: if (track && widthPx) track.style.height = `${widthPx}px`;

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
        }
    });

    function onResize(_e: Event) {
        windowWidth = window.innerWidth;
    }

    function onScroll(_e: Event) {
        const offsetTop = track.offsetTop;
        const scrollPx = clamp(window.scrollY - offsetTop, 0, excessScroll);

        content.style.transform = `translate3d(${-scrollPx}px, 0, 0)`;
    }
</script>

<div bind:this={track} class="w-screen m-0 gap-0">
    <div class="sticky w-screen h-screen overflow-hidden top-0">
        <div class="absolute top-0 w-auto h-auto">
            <slot name="sticky" />
        </div>
        <div bind:this={content} class="h-screen flex justify-around items-center will-change-transform" style={`width: ${vw}vw`}>
            <slot />
        </div>
    </div>
</div>