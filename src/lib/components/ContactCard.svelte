<script lang="ts">
	import Card from './Card.svelte';

	export let email: string;

	let subject: string;
	let body: string;
</script>

<Card>
	<h1 class="text-2xl font-bold mb-4">Contact Me!</h1>
	<div class="flex flex-col gap-3">
        <div class="flex flex-row justify-between items-center gap-3">
            <input class="bg-black rounded-xl py-2 px-4 flex-1 w-full" disabled type="text" placeholder="Subject" value="To: {email}"/>
            <a href="mailto:{email}?subject={subject ?? ""}&body={body ?? ""}" target="_blank" class="bg-black rounded-xl flex flex-row justify-center text-center gap-2 py-2 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                Send
            </a>
        </div>
        <input class="bg-black rounded-xl py-2 px-4" type="text" placeholder="Subject" bind:value={subject}/>
        <textarea class="bg-black rounded-xl py-2 px-4 min-h-32 h-fit" bind:value={body}></textarea>
    </div>
</Card>
