<script lang="ts">
  import BackToTop from '$lib/components/back-to-top.svelte';
  import CoffeeModal from './coffee-modal.svelte';
  import DeleteCoffeeModal from './delete-coffee-modal.svelte';

  let { data } = $props();
</script>

<section>
  <div class="mx-12 pt-10 px-4 flex-row flex justify-between">
    <span class="font-bold text-5 text-stone-800">จัดการสินค้า</span>
    <CoffeeModal action="add" />
  </div>

  <div class="px-4 mx-12 pb-10">
    <div class="relative overflow-x-auto shadow-md rounded-md">
      <table class="w-full text-sm text-left rtl:text-right text-stone-500">
        <thead class="text-xs text-stone-900 uppercase bg-stone-300">
          <tr>
            <th scope="col" class="px-6 py-3"> ชื่อ </th>
            <th scope="col" class="px-6 py-3"> ประเภท </th>
            <th scope="col" class="px-6 py-3"> ระดับของการคั่ว </th>
            <th scope="col" class="px-6 py-3"> ขนาดคงเหลือ (กิโลกรัม) </th>
            <th scope="col" class="px-6 py-3"> ยอดสูงสุดที่สั่งได้ </th>
            <th scope="col" class="px-6 py-3"> ราคา </th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {#each data.coffee as coffee}
            <tr class="bg-white border-t border-stone-200 hover:bg-stone-50">
              <th scope="row" class="px-6 py-4 font-medium text-stone-900 whitespace-nowrap">
                {coffee.name}
              </th>
              <td class="px-6 py-4"> {coffee.type} </td>
              <td class="px-6 py-4"> {coffee.roastedLevel} </td>
              <td class="px-6 py-4"> {coffee.stock} </td>
              <td class="px-6 py-4"> {coffee.maxOrder} </td>
              <td class="px-6 py-4"> {coffee.price} </td>
              <td class="px-6 py-4">
                <CoffeeModal action="edit" {...coffee} />
                <DeleteCoffeeModal
                  id={coffee.id}
                  onDelete={() => (data.coffee = data.coffee.filter((v) => v.id !== coffee.id))}
                />
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<BackToTop />
