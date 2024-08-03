<script lang="ts">
	let styles = {
        xPercent: 50,
        yPercent: 50,
	};

    function onMouseMove(event: MouseEvent) {
        const eventTarget = event.currentTarget;

        if (!(eventTarget instanceof Element)) return;

        const rect = eventTarget.getBoundingClientRect();
        const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

        styles = {
            xPercent, yPercent
        }
    }
	
	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');

</script>

<section class="bg-primary-200 border-primary-700 border-2 rounded-2xl p-4 w-1/2" on:mousemove={onMouseMove} role="presentation">
    <slot />
</section>

<style>

</style>