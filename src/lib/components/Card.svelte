<script lang="ts">
	export let flareSize: number = 150;
	let xBg = -50,
		yBg = -50;

	function onMouseMove(event: MouseEvent) {
		const eventTarget = event.currentTarget;

		if (!(eventTarget instanceof Element)) return;

		const rect = eventTarget.getBoundingClientRect();
		xBg = event.clientX - rect.left - flareSize / 2;
		yBg = event.clientY - rect.top - flareSize / 2;

		console.log({ xBg, yBg });
	}
</script>

<section
	style="--x-bg:{xBg}px;--y-bg:{yBg}px;--flare-size:{flareSize}px;"
	class="group rounded-2xl p-4 w-1/2 relative overflow-hidden bg-slate-800"
	on:mousemove={onMouseMove}
	role="presentation"
>
	<div
		class="flare inset-0 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
	></div>
	<div
		class="inset-1 absolute overflow-hidden"
	>
		<div
			class="flare inset-0 absolute opacity-0 group-hover:opacity-50"
		></div>
	</div>
	<slot />
</section>

<style>
	.flare {
		background-image: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.2),
			rgba(0, 0, 0, 0) 70%
		);
		background-repeat: no-repeat;
		background-position: var(--x-bg) var(--y-bg);
		background-size: var(--flare-size) var(--flare-size);
	}
</style>
