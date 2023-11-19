<script lang="ts">
    let editMode = false;
    let sections = ['featured', 'newest', 'remixes', 'loves', 'views', 'sds', 'curated'];
    let layout = {
        'featured': ['left', 'full'],
        'newest': ['left', 'full'],
        'remixes': ['left', 'full'],
        'loves': ['left', 'full'],
        'views': ['left', 'full'],
        'sds': ['left', 'full'],
        'curated': ['left', 'full']
    }
</script>

<section>
    <h1>Community Browser</h1>
    <p>A customizable page to view the Scratch community from</p>
    <p><button on:click={() => editMode = !editMode}>{editMode ? 'Done' : 'Edit'}</button></p>
</section>

{#if editMode}
    <section>
        <h1>Customize</h1>
    </section>
{/if}

{#if 'featured' in sections}
    <section class={layout['featured'].join(" ")}>
        <h1>Featured Projects</h1>
    </section>
{/if}