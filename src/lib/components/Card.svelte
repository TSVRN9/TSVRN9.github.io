<script lang="ts">
	export let flareSize: number = 300;
	let className: string = '';
	export { className as class };


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
	class="group rounded-2xl py-4 px-8 w-full relative overflow-hidden card-background transition-all"
	on:mousemove={onMouseMove}
	role="presentation"
>
	<div
		class="flare inset-0 absolute opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden duration-300 pointer-events-none rounded-2xl"
	>
		<div class="card-background-hover div inset-[1px] absolute transition-all overflow-hidden rounded-2xl">
			<div class="flare inset-0 absolute opacity-20 transition-opacity"></div>
		</div>
	</div>
	<div class="pointer-events-auto relative transition-all {className}">
		<slot />
	</div>
</section>

<style lang="css">
	:root {
		--flare-color: 136, 93, 197;
	}
	.flare {
		background-image: radial-gradient(
			circle at center,
			rgba(var(--flare-color), 1),
			rgba(var(--flare-color), 0) 70%
		);
		background-repeat: no-repeat;
		background-position: var(--x-bg) var(--y-bg);
		background-size: var(--flare-size) var(--flare-size);
	}

	.card-background {
		background-color: rgb(33, 17, 55);
	}

	.card-background-hover {
		background-color: rgb(33, 17, 55);
	}
</style>
