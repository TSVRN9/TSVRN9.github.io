<script lang="ts">
    export let imageSrc: string;
    export let imageAlt: string;
</script>

<div class="rounded-xl p-4 flex flex-col gap-4 items-center justify-center text-center">
    <img class="w-8" src={imageSrc} alt={imageAlt} />
    <slot />
</div>