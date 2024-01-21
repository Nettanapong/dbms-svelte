<script lang="ts">
  import Card from '$lib/components/card.svelte';
  import BackToTop from '$lib/components/back-to-top.svelte';
  let { data } = $props();
</script>

<section>
  <div class="max-w-screen relative">
    <img class="w-full" src="/src/lib/assets/banner.jpg" alt="coffee beans banner" />
    <div class="top-45 px-12 absolute flex flex-col">
      <span class="text-white text-5xl">COFFEE BEANS</span>
      <span class="text-white text-5">ขายส่งเมล็ดกาแฟ</span>
    </div>
  </div>
</section>

<section>
  <div class="mx-12 pt-10 p-4">
    <span class="font-bold text-5 text-stone-800">เมล็ดกาแฟ</span>
  </div>
  <div class="p-4 pb-10 mx-12 flex justify-stretch gap-8 flex flex-wrap">
    {#each data.coffee as coffee}
      <Card {...coffee} />
    {/each}
  </div>
</section>

<BackToTop />
