<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import Hero from '$lib/components/hero.svelte';
	import HorizontalScroll from '$lib/components/horizontal-scroll.svelte';
</script>

<svelte:head>
	<title>Owen Wang</title>
</svelte:head>

<div class="overflow-clip flex flex-col gap-4">
	<Hero />
	<HorizontalScroll vw={200}>
			<div class="w-screen text-4xl text-center py-8 intersect:animate-fade-down">About me...</div>
		<Card imageSrc="/images/goofy.jpg" imageAlt="placeholder">
			<p>Lorem ipsum</p>
		</Card>
		<Card imageSrc="/images/goofy.jpg" imageAlt="placeholder">
			<p>Lorem ipsum</p>
		</Card>
		<h1 class="">Hi</h1>
		<h1 class="">bye</h1>
	</HorizontalScroll>
	<div class="w-screen h-screen text-center content-center">
		HELLOOOO
	</div>
</div>