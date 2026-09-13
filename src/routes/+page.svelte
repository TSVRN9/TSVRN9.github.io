<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import HorizontalScroll from '$lib/components/HorizontalScroll.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import { projects } from '$lib/projects';
</script>

<svelte:head>
    <title>Owen Wang</title>
</svelte:head>

<div class="flex flex-col gap-8 overflow-x-clip w-full">
    <Hero />
    <HorizontalScroll vw={projects.length * 100}>
        <div
            class="w-screen text-4xl text-center py-16 intersect:animate-fade-down intersect:visible invisible"
            slot="sticky"
        >
            <div class="motion-safe:animate-floating motion-reduce:animate-none">Projects</div>
        </div>
        {#each projects as project, i}
            <ProjectCard
                index={i + 1}
                title={project.title}
                description={project.description}
                tech={project.tech}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                image={project.image}
            />
        {/each}
    </HorizontalScroll>
    <Contact />
</div>
