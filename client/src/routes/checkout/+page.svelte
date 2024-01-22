<script lang="ts">
  import useCart from '$lib/stores/product.svelte';

  const product = useCart();
  let shippingPrice = 0;
</script>

<section>
  <div class="mx-12 pt-10 p-4">
    <span class="font-bold text-5 text-stone-800">สั่งซื้อ</span>
  </div>

  <div class="p-4 mx-12 pb-10 flex flex-row justify-between items-start gap-6">
    <div class="w-3/6 rounded-md shadow-lg bg-white p-4">
      {#if product.cartProduct?.maxOrder}
        <div class="flex flex-row items-center w-full px-4 py-6">
          <div class="h-30 w-30 flex-shrink-0 overflow-hidden rounded-md border border-stone-200">
            <img
              class="h-full w-full object-cover object-center"
              src="/src/lib/assets/product.png"
              alt=""
            />
          </div>
          <div class="flex w-full flex-col ml-4">
            <span class="font-semibold text-xl">{product.cartProduct?.name}</span>
            <span class="font-semibold">{product.cartProduct?.type}</span>
            <span class="float-right text-stone-500 text-sm py-3"
              >จำนวน {product.cartProduct?.maxOrder} กิโลกรัม</span
            >
            <span class="text-lg"
              >฿{product.cartProduct?.maxOrder
                ? (product.cartProduct?.price * product.cartProduct?.maxOrder).toFixed(2)
                : '0'}</span
            >
          </div>
          <button class="flex items-center justify-center h-7 w-7 bg-white cursor-pointer">
            <div class="i-mdi:delete-outline h-6 w-6 text-stone-400 hover:text-red"></div>
          </button>
        </div>
      {:else}
        <span class="flex justify-center text-stone-500">ยังไม่มีสินค้า</span>
      {/if}
    </div>

    <div class="bg-white rounded-md shadow-lg px-4 lg:mt-0 w-3/6">
      <p class="text-xl font-medium">รายละเอียดการสั่งซื้อ</p>
      <p class="text-gray-400">ตรวจสอบรายละเอียดการสั่งซื้อให้ครบถ้วน</p>
      <div>
        <label for="name" class="mt-4 mb-2 block text-sm font-medium">ชื่อ นามสกุล</label>
        <div class="relative">
          <input
            type="text"
            id="email"
            name="email"
            class="w-full rounded-md border border-stone-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="นายกอไก่ ขอไข่"
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <div class="i-mdi:account-circle-outline h-4 w-4 text-stone-400"></div>
          </div>
        </div>

        <label for="phone" class="mt-4 mb-2 block text-sm font-medium">เบอร์โทรศัพท์</label>
        <div class="relative">
          <input
            type="text"
            id="email"
            name="email"
            class="w-full rounded-md border border-stone-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="1234567890"
          />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <div class="i-mdi:cellphone h-4 w-4 text-stone-400"></div>
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
              ฿{product.cartProduct?.maxOrder
                ? (product.cartProduct?.price * product.cartProduct?.maxOrder).toFixed(2)
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
            ฿{product.cartProduct?.maxOrder
              ? (
                  product.cartProduct?.price * product.cartProduct?.maxOrder +
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
