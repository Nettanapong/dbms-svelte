<script lang="ts">
  import BackToTop from '$lib/components/back-to-top.svelte';

  let { data } = $props();
</script>

<section>
  <div class="mx-12 pt-10 p-4">
    <span class="font-bold text-5 text-stone-800">รายการสั่งซื้อ</span>
  </div>

  <div class="p-4 mx-12 pb-10">
    <div class="relative overflow-x-auto shadow-md sm:rounded-md">
      <table class="w-full text-sm text-left rtl:text-right text-stone-500">
        <thead class="text-xs text-white uppercase bg-orange-900">
          <tr>
            <th scope="col" class="px-6 py-3"> ชื่อ </th>
            <th scope="col" class="px-6 py-3"> ที่อยู่ </th>
            <th scope="col" class="px-6 py-3"> สินค้า </th>
            <th scope="col" class="px-6 py-3"> ขนาด(กิโลกรัม) </th>
            <th scope="col" class="px-6 py-3"> สถานะ </th>
          </tr>
        </thead>
        <tbody>
          {#each data.order as order}
            <tr class="bg-white border-t border-stone-200 hover:bg-stone-50">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {order.name}
              </th>
              <td class="px-6 py-4"> {order.address} </td>
              <td class="px-6 py-4"> {order.coffee.name} </td>
              <td class="px-6 py-4"> {order.qty} </td>
              <td class="px-6 py-4"> {order.status} </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<BackToTop />
