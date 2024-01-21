<script lang="ts">
  import useCart from '$lib/stores/product.svelte';

  const { removeFromCart } = useCart();
  const productStore = useCart();
  let shippingPrice = 0;
</script>

<section>
  <div class="mx-12 pt-10 p-4">
    <span class="font-bold text-5 text-stone-800">สั่งซื้อ</span>
  </div>

  <div class="p-4 mx-12 pb-10 flex flex-row justify-between items-start gap-6">
    <div class="w-3/6 rounded-md shadow-lg bg-white p-4">
      {#if productStore.cartProduct?.maxOrder}
        <div class="flex flex-row items-center w-full px-4 py-6">
          <div class="h-30 w-30 flex-shrink-0 overflow-hidden rounded-md border border-stone-200">
            <img
              class="h-full w-full object-cover object-center"
              src="/src/lib/assets/product.png"
              alt=""
            />
          </div>
          <div class="flex w-full flex-col ml-4">
            <span class="font-semibold text-xl">{productStore.cartProduct?.name}</span>
            <span class="font-semibold">{productStore.cartProduct?.type}</span>
            <span class="float-right text-stone-500 text-sm py-3"
              >จำนวน {productStore.cartProduct?.maxOrder} กิโลกรัม</span
            >
            <span class="text-lg"
              >฿{productStore.cartProduct?.maxOrder
                ? (productStore.cartProduct?.price * productStore.cartProduct?.maxOrder).toFixed(2)
                : '0'}</span
            >
          </div>
          <button
            onclick={removeFromCart}
            class="flex items-center justify-center h-7 w-7 bg-white cursor-pointer"
          >
            <svg
              class="h-6 w-6 text-stone-400 hover:text-red"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" /> <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" /> <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg
            ></button
          >
        </div>
      {:else}
        <span class="flex justify-center text-stone-500">ยังไม่มีสินค้า</span>
      {/if}
    </div>

    <div class="bg-white rounded-md shadow-lg px-4 lg:mt-0 w-3/6">
      <p class="text-xl font-medium">รายละเอียดการสั่งซื้อ</p>
      <p class="text-gray-400">ตรวจสอบรายละเอียดการสั่งซื้อให้ครบถ้วน</p>
      <div>
        <label for="email" class="mt-4 mb-2 block text-sm font-medium">ชื่อ นามสกุล</label>
        <div class="relative">
          <input
            type="text"
            id="email"
            name="email"
            class="w-full rounded-md border border-stone-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="นายกอไก่ ขอไข่"
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg
              class="h-4 w-4 text-stone-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <label for="email" class="mt-4 mb-2 block text-sm font-medium">เบอร์โทรศัพท์</label>
        <div class="relative">
          <input
            type="text"
            id="email"
            name="email"
            class="w-full rounded-md border border-stone-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="1234567890"
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg
              class="h-4 w-4 text-stone-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" /></svg
            >
          </div>
        </div>

        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium"
          >ที่อยู่ในการจัดส่ง</label
        >
        <div class="flex flex-row gap-x-2">
          <input
            type="text"
            name="billing-zip"
            class="w-2/6 rounded-md border border-stone-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="รหัสไปรษณีย์"
          />
          <select
            name="billing-state"
            class="w-4/6 rounded-md border border-stone-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Chiang Mai">เชียงใหม่</option>
          </select>
        </div>

        <!-- Total -->
        <div class="mt-6 border-t border-b border-stone-200 py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-stone-800">ราคารวม</p>
            <p class="font-semibold text-stone-800">
              ฿{productStore.cartProduct?.maxOrder
                ? (productStore.cartProduct?.price * productStore.cartProduct?.maxOrder).toFixed(2)
                : '0'}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-stone-800">ค่าจัดส่ง</p>
            <p class="font-semibold text-stone-800">฿{shippingPrice.toFixed(2)}</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-stone-800">ราคาสุทธิ</p>
          <p class="text-2xl font-semibold text-stone-800">
            ฿{productStore.cartProduct?.maxOrder
              ? (
                  productStore.cartProduct?.price * productStore.cartProduct?.maxOrder +
                  shippingPrice
                ).toFixed(2)
              : '0'}
          </p>
        </div>
      </div>
      <button
        class="cursor-pointer mt-4 mb-8 w-full rounded-md bg-orange-900 hover:bg-orange-950 px-6 py-3 font-medium text-white"
      >
        สั่งซื้อสินค้า
      </button>
    </div>
  </div>
</section>
