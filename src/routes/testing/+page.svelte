<script>
	import ContactCard from "$lib/components/ContactCard.svelte";
import Card from "../../lib/components/Card.svelte";

</script>
<main class="bg-black text-white w-screen h-screen">
    <div class="mx-auto w-1/2 flex flex-col gap-4 items-center py-4">
        <Card>
            <h1 class="text-2xl mb-4">Neque porro quisquam est qui</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, dui quis posuere ultrices, est augue feugiat dui, hendrerit viverra massa arcu eget erat. Cras laoreet mauris eget porta ultricies. Nulla imperdiet augue ac dui consectetur, vitae pretium sem elementum. Vestibulum feugiat convallis neque eget posuere. Nulla facilisi. Aliquam sodales ut erat non eleifend. Suspendisse eu est dapibus, vehicula est ut, tincidunt neque.</p>
        </Card>
        <ContactCard email="test@test.com"/>
    </div>
</main>