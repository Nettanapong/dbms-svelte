<script lang="ts">
  import classes from 'svelte-transition-classes';
  import useCart from '$lib/stores/product.svelte';

  const { removeFromCart } = useCart();
  const productStore = useCart();
  let isOpen = $state<boolean>(false);
</script>

<div>
  <button onclick={() => (isOpen = true)} class="cursor-pointer bg-white">
    <svg
      class="h-8 w-8 text-stone-800 hover:text-orange-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  </button>

  {#if isOpen}
    <!-- Overlay -->
    <div
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
      style="z-index: 1;"
      in:classes={{
        duration: 300,
        base: 'ease-out duration-300',
        from: 'opacity-0',
        to: 'opacity-100',
      }}
      out:classes={{
        duration: 200,
        base: 'ease-in duration-200',
        from: 'opacity-100',
        to: 'opacity-0',
      }}
    >
      <div class="fixed inset-0 overflow-hidden" style="z-index: 2;">
        <div class="absolute inset-0 overflow-hidden ease-in-out">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <!-- Modal -->
            <div
              class="pointer-events-auto w-screen max-w-md"
              in:classes={{
                duration: 500,
                base: 'transform transition ease-in-out duration-500',
                from: 'translate-x-full',
                to: 'translate-x-0',
              }}
              out:classes={{
                duration: 200,
                base: 'transform transition ease-in-out duration-200',
                from: 'translate-x-0',
                to: 'translate-x-full',
              }}
            >
              <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-stone-800" id="slide-over-title">
                      รถเข็นสินค้า
                    </h2>

                    <div class="ml-3 flex h-7 items-center">
                      <button
                        onclick={() => (isOpen = false)}
                        type="button"
                        class="cursor-pointer text-stone-400 bg-transparent hover:bg-gray-200 hover:text-stone-800 rounded-md text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="default-modal"
                      >
                        <svg
                          class="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-stone-200">
                        <!-- Item -->
                        {#if productStore.cartProduct?.maxOrder}
                          <li class="flex py-6">
                            <div
                              class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-stone-200"
                            >
                              <img
                                src="/src/lib/assets/product.png"
                                alt={productStore.cartProduct?.name}
                                class="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div
                                  class="flex justify-between text-base font-medium text-stone-800"
                                >
                                  <div>
                                    <span>{productStore.cartProduct?.name}</span>
                                  </div>
                                  <span class="ml-4">฿{productStore.cartProduct?.price.toFixed(2)}</span>
                                </div>
                                <span class="mt-1 text-stone-800">
                                  {productStore.cartProduct?.type}
                                </span>
                              </div>
                              <div class="flex flex-1 justify-between items-center text-sm pt-3">
                                <p class="text-stone-500">
                                  ขนาด {productStore.cartProduct?.maxOrder.toFixed(2)} กิโลกรัม
                                </p>

                                <div class="flex">
                                  <button
                                    type="button"
                                    onclick={removeFromCart}
                                    class="cursor-pointer bg-white font-medium text-blue-700 hover:underline"
                                    >ลบ</button
                                  >
                                </div>
                              </div>
                            </div>
                          </li>
                        {:else}
                          <span class="flex justify-center text-stone-500">ยังไม่มีสินค้า</span>
                        {/if}
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="border-t border-stone-200 px-4 py-6 sm:px-6">
                  <div class="flex justify-between text-base font-medium text-stone-800">
                    <p>ราคารวม</p>
                    <p>
                      ฿{productStore.cartProduct?.maxOrder
                        ? (productStore.cartProduct?.price * productStore.cartProduct?.maxOrder).toFixed(2)
                        : '0'}
                    </p>
                  </div>
                  <p class="mt-0.5 text-sm text-stone-500">ค่าจัดส่งจะคำนวณหลังสั่งซื้อ</p>
                  <div class="mt-6">
                    <a
                      onclick={() => (productStore.cartProduct?.maxOrder ? isOpen = false : '')}
                      href={productStore.cartProduct?.maxOrder ? '/checkout' : '/'}
                      type="button"
                      class="flex w-full no-underline cursor-pointer items-center justify-center rounded-md bg-orange-900 hover:bg-orange-950 px-6 py-3 text-base font-medium text-white"
                      >สั่งซื้อ</a
                    >
                  </div>
                  <div class="mt-6 flex justify-center text-center text-sm text-stone-500">
                    <p>
                      หรือ
                      <button
                        type="button"
                        class="cursor-pointer font-medium bg-white text-blue-700 hover:underline"
                        onclick={() => (isOpen = false)}
                      >
                        เลือกสินค้าต่อ
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
