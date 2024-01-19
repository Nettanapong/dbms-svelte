<script lang="ts">
  import { onMount } from 'svelte';

  let scrollPosition = 0;
  let showButton = $state<boolean>(false);
  const scrollThreshold = 500;

  onMount(() => {
    window.addEventListener('scroll', () => {
      scrollPosition = window.scrollY;
      showButton = scrollPosition > scrollThreshold;
    });
  });

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
</script>

<button
  on:click={goToTop}
  class={`fixed bottom-5 right-5 ${
    showButton ? '' : 'invisible'
  } cursor-pointer animate-bounce fixed bottom-5 right-5 shadow-lg bg-orange-900 opacity-60 hover:opacity-100 text-white font-bold py-2 px-2 rounded-full`}
>
  <svg
    class="h-8 w-8 text-white"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" /> <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="18" y1="11" x2="12" y2="5" /> <line x1="6" y1="11" x2="12" y2="5" /></svg
  >
</button>
