<script lang="ts">
    export let flareSize: number = 120;
    let xBg = -50, yBg = -50;

    function onMouseMove(event: MouseEvent) {
        const eventTarget = event.currentTarget;

        if (!(eventTarget instanceof Element)) return;

        const rect = eventTarget.getBoundingClientRect();
        xBg = event.clientX - rect.left - (flareSize / 2);
        yBg = event.clientY - rect.top - (flareSize / 2);

        console.log({ xBg, yBg })
    }
</script>

<section style="--x-bg:{xBg}px;--y-bg:{yBg}px;--flare-size:{flareSize}px;" class="border-primary-700 border-2 rounded-2xl p-4 w-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300" on:mousemove={onMouseMove} role="presentation">
    <slot />
</section>

<style>
    section {
        background-image: radial-gradient(circle at center, rgba(100, 100, 100, 255), rgba(100, 100, 100, 0) 70%);
        background-repeat: no-repeat;
        background-position: var(--x-bg) var(--y-bg);
        background-size: var(--flare-size) var(--flare-size);
    }
</style>