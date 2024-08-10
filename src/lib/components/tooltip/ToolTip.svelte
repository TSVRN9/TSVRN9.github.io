<script lang="ts">
    export let direction: string = 'left';
</script>

<div
    class="inline-block md:hidden md:group-hover:block md:group-hover:duration-300 md:group-hover:animate-in md:group-hover:slide-in-from-{direction}-1/3 md:group-hover:fade-in-25 z-10"
>
    <slot />
</div>