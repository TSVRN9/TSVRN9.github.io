<script lang="ts">
    export let intensity: number = 15;

    import { browser } from '$app/environment';
    import { onDestroy, onMount } from 'svelte';

    let container: HTMLElement;
    let lastClientX: number | null = null;
    let lastClientY: number | null = null;
    let scrollRafId: number | null = null;

    function applyTilt(clientX: number, clientY: number) {
        const { top, left, width, height } = container.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const mouseX = clientX - centerX;
        const mouseY = clientY - centerY;

        const spread = 500;
        const percentageX = mouseX / spread;
        const percentageY = mouseY / spread;
        const rotateX = percentageY * -intensity;
        const rotateY = percentageX * intensity;

        container.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    // clientX/clientY (viewport-relative), matching getBoundingClientRect() — pageX/pageY
    // (document-relative) would drift further off as window.scrollY grows, which is exactly
    // what drives this site's horizontal-scroll effect.
    export const onHover = (e: MouseEvent) => {
        lastClientX = e.clientX;
        lastClientY = e.clientY;
        applyTilt(lastClientX, lastClientY);
    };

    // Scrolling moves the element under an otherwise-static cursor, so the tilt needs to
    // recompute then too, not just on mousemove.
    function onScroll() {
        if (lastClientX === null || lastClientY === null) return;
        if (scrollRafId !== null) return;
        scrollRafId = requestAnimationFrame(() => {
            scrollRafId = null;
            applyTilt(lastClientX as number, lastClientY as number);
        });
    }

    onMount(() => {
        if (browser) window.addEventListener('scroll', onScroll);
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener('scroll', onScroll);
            if (scrollRafId !== null) cancelAnimationFrame(scrollRafId);
        }
    });
</script>

<div
    bind:this={container}
    class={'will-change-transform transition-transform duration-150 ease-out ' +
        ($$props.class ?? '')}
    role="region"
>
    <slot />
</div>
