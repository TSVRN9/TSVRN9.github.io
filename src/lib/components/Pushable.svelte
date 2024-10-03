<script lang="ts">
    export let intensity: number = 15;

    let container: HTMLElement;

    export const onHover = (e: MouseEvent) => {
        const boundingRect = container.getBoundingClientRect();

        const { top, left, width, height } = boundingRect;
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const mouseX = e.pageX - centerX;
        const mouseY = e.pageY - centerY;

        // const percentageX = mouseX / width;
        // const percentageY = mouseY / height;
        const aaaaa = 500;
        const percentageX = mouseX / aaaaa;
        const percentageY = mouseY / aaaaa;
        const rotateX = percentageY * -intensity;
        const rotateY = percentageX * intensity;

        container.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
</script>

<div bind:this={container} class={'will-change-transform ' + $$props.class} role="region">
    <slot />
</div>
