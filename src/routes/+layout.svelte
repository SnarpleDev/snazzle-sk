<style>
    @import '../../static/index.css';
</style>

<script lang="ts">
    import Navbar from '../lib/Navbar.svelte';
</script>

<Navbar />

<slot>
    <section>
        <h1>Oops, something went wrong while rendering!</h1>
    </section>
</slot>