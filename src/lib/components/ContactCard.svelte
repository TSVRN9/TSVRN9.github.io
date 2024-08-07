<script lang="ts">
	import Card from './Card.svelte';

	export let email: string;

	let subject: string;
	let body: string;
</script>

<Card>
	<h1>Contact Me!</h1>
	<div class="flex flex-col gap-3">
        <div>To: {email}</div>
        <input class="bg-black rounded-xl" type="text" placeholder="Subject" bind:value={subject}/>
        <textarea class="bg-black rounded-xl" bind:value={body}></textarea>
        <button class="bg-black rounded-xl flex flex-row justify-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            Send
        </button>
    </div>
</Card>
