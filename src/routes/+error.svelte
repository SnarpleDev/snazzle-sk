<script lang="ts">
	import { page } from '$app/stores';
</script>

<title>Snazzle - {$page.status}</title>

<section>
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}</p>
</section>