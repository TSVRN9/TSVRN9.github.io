<script lang="ts">
	import { browser } from '$app/environment';

	import ToolTip from '$lib/components/tooltip/ToolTip.svelte';
	import TooltipContainer from '$lib/components/tooltip/TooltipContainer.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Owen Wang</title>
</svelte:head>

<main class="dark:bg-black dark:text-white py-12">
	<div class="w-4/5 md:w-1/2 lg:w-2/5 mx-auto flex flex-col gap-4">
		<img src="/images/goofy.jpg" alt="Owen Wang sitting" class="w-1/2 mx-auto rounded-lg" />
		<h1 class="text-4xl text-center">Owen Wang</h1>
		<div class="flex items-center text-gray-500">
			<div class="flex-1 border-gray-500 border-b-2 -mx-4 rounded-full"></div>
		</div>
		<div class="flex flex-col gap-y-2 mt-4">
			<h2>Links</h2>
			<ul class="list-disc ml-8">
				<li>
					<a
						href="https://github.com/TSVRN9"
						class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline">Github</a
					>
				</li>
				<li>
					<a
						href="https://www.athletic.net/athlete/19025995/cross-country/high-school"
						class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline">Athletic.net</a
					>
				</li>
				<li>
					<a href="https://zyfo.ai" class="text-nowrap">
						<span class="bg-gray-800 hover:bg-gray-600 rounded-full text-white py-1 px-4 group">
							Zyfo<span
								class="bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 inline-block text-transparent bg-clip-text font-bold"
								>.ai</span
							>
						</span>
					</a>
					- AI Website Maker
				</li>
				<li>
					<a
						href="https://owenwang.dev/Transcribe"
						class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline">Transcribe</a
					> - Music Player for Transcription
				</li>
				<li>
					<a
						href="https://owenwang.dev/SortingVisualizer"
						class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline">Sorting Visualizer</a
					>
				</li>
			</ul>
			<h2>Some Skills...</h2>
			<ul class="list-disc ml-8">
				<li>Python</li>
				<li>Java</li>
				<li>
					Cross Country
					<ul class="list-disc ml-8">
						<li>5k - 18:29</li>
					</ul>
				</li>
				<li>
					Web Development!!!
					<ul class="list-disc ml-8">
						<li>Typescript</li>
						<li>React</li>
						<li>TailwindCSS</li>
						<li>Vanilla HTML/JS</li>
						<li>Svelte!!!</li>
					</ul>
				</li>
				<li>
					Piano
					<ul class="list-disc ml-8">
						<li>
							<a
								href="https://www.hallhighjazz.com/"
								class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
								>Hall High School Concert Jazz Band 2023-2024</a
							>
							<ul class="list-disc ml-8">
								<li>
									<a
										href="https://archive.maherpublications.com/view/533822710/12/"
										class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
										>Downbeat Best High School Jazz Ensemble</a
									>
								</li>
								<li>
									<a
										href="https://archive.maherpublications.com/view/533822710/32/"
										class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
										>Downbeat Best High School Latin Jazz Ensemble</a
									>
								</li>
								<li>
									<a
										href="https://static1.squarespace.com/static/5d0943cc1685450001db8e42/t/65d67cbfe89abf7b01ff6dbb/1708555455774/2024+HIGH+SCHOOL+COMPETITION+RESULTS+PRESS+RELEASE.pdf"
										class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
									>
										Charles Mingus Festival Outstanding Big Band</a
									>
								</li>
								<li>
									<a
										href="https://static1.squarespace.com/static/5d0943cc1685450001db8e42/t/65d67cbfe89abf7b01ff6dbb/1708555455774/2024+HIGH+SCHOOL+COMPETITION+RESULTS+PRESS+RELEASE.pdf"
										class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
									>
										Charles Mingus Festival Outstanding Rhythm Section: Big Band</a
									>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					Machine Learning
					<ul class="list-disc ml-8">
						<li>
							<TooltipContainer>
								<a
									href="https://github.com/TSVRN9/BeginnerNeuralNetwork"
									class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline md:flex md:flex-row"
									>Handwritten Digits Perceptron
									<ToolTip>&nbsp;in Java!!! 😱</ToolTip>
								</a>
							</TooltipContainer>
						</li>
					</ul>
				</li>
				<li>Math Tutoring</li>
				<li>
					Minecraft Plugins
					<ul class="list-disc ml-8">
						<li>
							<a
								href="https://github.com/TSVRN9/MinecraftManhunt"
								class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline">Minecraft Manhunt</a
							>
						</li>
					</ul>
				</li>
			</ul>
			<h2>Contact Me!</h2>
			<ul class="list-disc ml-8">
				<li>
					Email: <a
						href="mailto:contact-owen-wang.yojeg@aleeas.com"
						class="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
						>contact-owen-wang.yojeg@aleeas.com</a
					>
				</li>
			</ul>
		</div>
		{#if browser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches}
		<div class="w-5/6 mx-auto">
			<Card class="flex flex-row justify-between gap-2 items-center text-center text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-yellow-300 transition-transform">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
				</svg>

				<TooltipContainer>
					Think this site is a little bare? It'll be updated... eventually...
					<ToolTip direction="up">Graphic design is tough...</ToolTip>
				</TooltipContainer>

				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-yellow-300 transition-transform">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
				</svg>
			</Card>
		</div>
		{/if}
	</div>
	<!-- button on:click={() => { alert('Clicked!'); }} class="bg-primary-600 text-white py-2 px-4 m-4 text-2xl rounded-md">Click Me</button> -->
</main>
