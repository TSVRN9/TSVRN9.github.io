<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import HorizontalScroll from '$lib/components/HorizontalScroll.svelte';
</script>

<svelte:head>
    <title>Owen Wang</title>
</svelte:head>

<div class="flex flex-col gap-8 overflow-x-clip w-full">
    <Hero />
    <HorizontalScroll vw={200}>
        <div
            class="w-screen text-4xl text-center py-16 intersect:animate-fade-down intersect:visible invisible"
            slot="sticky"
        >
            <div class="animate-floating motion-safe:animate-none">About me...</div>
        </div>
        <div class="rounded-xl flex flex-col justify-center md:gap-4 items-center text-center">
            <enhanced:img
                class="basis-1 w-1/4 rounded-2xl"
                src="/static/images/running.jpg"
                alt="Owen Wang running"
            />
            <h1>I do cross country!!!</h1>
            <a
                href="https://www.athletic.net/athlete/19025995/cross-country"
                class="flex gap-2 justify-center items-center rounded-full bg-gray-200 hover:bg-gray-400"
            >
                <enhanced:img
                    class="inline-block w-6 rounded-full"
                    src="/static/images/a-net.png"
                    alt="athletic.net logo"
                />
                <span>athletic.net</span>
            </a>
        </div>
        <!-- <div>
            <enhanced:img
                class="basis-1 w-1/4 rounded-2xl"
                src="/static/images/goofy.jpg"
                alt="Placeholder"
            />
        </div> -->
    </HorizontalScroll>
    <div class="w-screen h-screen text-center content-center">HELLOOOO</div>
</div>
