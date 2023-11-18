<script lang="ts">
	import { page } from '$app/stores';
</script>

<section>
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}</p>
</section>