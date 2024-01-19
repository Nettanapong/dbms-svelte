<script lang="ts">
  import '@unocss/reset/sanitize/sanitize.css';
  import '@unocss/reset/sanitize/assets.css';

  import 'uno.css';

  import '$lib/styles/app.css';

  import Navbar from '$lib/components/navbar.svelte';

  const { children } = $props();
</script>

<article class=":uno: font-sans bg-stone-100">
  <Navbar />

  {@render children()}
</article>
