<script lang="ts">
  import Card from '$lib/components/card.svelte';
  import ToTop from '$lib/components/to-top.svelte';
  import type { Coffee } from '$lib/types';

  let products = $state<Coffee[]>([
    {
      id: '001',
      name: 'ชื่อกาแฟ 1',
      stock: 100,
      type: 'ดอยคำ',
      maxOrder: 0,
      price: 100,
    },
    {
      id: '002',
      name: 'ชื่อกาแฟ 2',
      stock: 0,
      type: 'ดอยคำ',
      maxOrder: 0,
      price: 100,
    },
    {
      id: '003',
      name: 'ชื่อกาแฟ 3',
      stock: 0,
      type: 'ดอยคำ',
      maxOrder: 0,
      price: 100,
    },
    {
      id: '004',
      name: 'ชื่อกาแฟ 4',
      stock: 59,
      type: 'ดอยคำ',
      maxOrder: 0,
      price: 100,
    },
    {
      id: '005',
      name: 'ชื่อกาแฟ 5',
      stock: 213,
      type: 'ดอยคำ',
      maxOrder: 0,
      price: 100,
    },
    {
      id: '006',
      name: 'ชื่อกาแฟ 6',
      stock: 111,
      type: 'ดอยคำ',
      maxOrder: 0,
      price: 100,
    },
  ]);
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
    {#each products as { id, name, stock, type, maxOrder, price }}
      <Card {id} {name} {stock} {type} {maxOrder} {price} />
    {/each}
  </div>
</section>

<ToTop />
