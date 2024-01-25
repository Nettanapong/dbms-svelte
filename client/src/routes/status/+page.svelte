<script lang="ts">
  import BackToTop from '$lib/components/back-to-top.svelte';

  let { data } = $props();
</script>

<section>
  <div class="mx-12 pt-10 px-4">
    <span class="font-bold text-5 text-stone-800">รายการสั่งซื้อ</span>
  </div>

  <div class="px-4 mx-12 mt-6 pb-10">
    <div class="relative overflow-x-auto shadow-md rounded-md">
      <table class="w-full text-sm text-left rtl:text-right text-stone-500">
        <thead class="text-xs text-stone-900 uppercase bg-stone-300">
          <tr>
            <th scope="col" class="px-6 py-3"> ชื่อ </th>
            <th scope="col" class="px-6 py-3"> ที่อยู่ </th>
            <th scope="col" class="px-6 py-3"> สินค้า </th>
            <th scope="col" class="px-6 py-3"> ขนาด (กิโลกรัม) </th>
            <th scope="col" class="px-6 py-3"> สถานะ </th>
          </tr>
        </thead>
        <tbody>
          {#if data.order.length > 0}
            {#each data.order as order}
              <tr class="bg-white border-t border-stone-200 hover:bg-stone-100">
                <th scope="row" class="px-6 py-4 font-medium text-stone-900 whitespace-nowrap">
                  {order.name}
                </th>
                <td class="px-6 py-4">
                  {`${order.village.name} ต.${order.village.subDistrict.name} อ.${order.village.subDistrict.district.name} จ.${order.village.subDistrict.district.province.name}`}
                </td>
                <td class="px-6 py-4"> {order.coffee.name} </td>
                <td class="px-6 py-4"> {order.qty} </td>
                <td class="px-6 py-4"> {order.status} </td>
              </tr>
            {/each}
          {:else}
            <tr class="bg-white border-t border-stone-200 hover:bg-stone-100">
              <td colspan="5" class="px-6 py-4 text-center font-medium whitespace-nowrap"
                >ยังไม่มีข้อมูล</td
              >
            </tr>
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</section>

<BackToTop />
