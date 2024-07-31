<script lang="ts">
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<{click: MouseEvent}>();

    export let disabled: boolean = false;
    
    function handleClick(event: MouseEvent) {
        if (disabled) return;
        dispatch("click", event);
    }
</script>

<button on:click={handleClick} class="bg-primary-600 text-white py-2 px-4 m-4 text-2xl rounded-md">
    <slot />
</button>