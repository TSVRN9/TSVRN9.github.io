<script lang="ts">
	export let flareSize: number = 300;
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
	class="group rounded-2xl p-4 w-max relative overflow-hidden"
	on:mousemove={onMouseMove}
	role="presentation"
>
	<div
		class="flare inset-0 absolute opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden duration-300 pointer-events-none rounded-2xl"
	>
		<div class="div inset-[1px] absolute overflow-hidden rounded-2xl" style="background-color: rgb(23, 23, 40)">
			<div class="flare-background inset-0 absolute opacity-20"></div>
		</div>
	</div>
	<div class="pointer-events-auto relative transition-transform group-hover:scale-95">
		<slot />
	</div>
</section>

<style>
	.flare {
		background-image: radial-gradient(
			circle at center,
			rgba(93, 93, 197, 1),
			rgba(93, 93, 197, 0) 70%
		);
		background-repeat: no-repeat;
		background-position: var(--x-bg) var(--y-bg);
		background-size: var(--flare-size) var(--flare-size);
	}

	.flare-background {
		background: radial-gradient(
			circle at center,
			rgba(93, 93, 197, 1),
			rgba(93, 93, 197, 0) 70%
		);
		background-repeat: no-repeat;
		background-position: var(--x-bg) var(--y-bg);
		background-size: var(--flare-size) var(--flare-size);
	}
</style>
