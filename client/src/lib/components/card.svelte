<script lang="ts">
  import type { Coffee } from '$lib/types';
  import classes from 'svelte-transition-classes';

  let { id: _, name, stock, type, maxOrder, price } = $props<Coffee>();

  let empty = $state(false);
  let add = $state(false);
  let qty = $state(stock > 0.1 ? 0.1 : stock);

  function toCart() {
    empty = qty === 0;
    add = qty !== 0;

    setTimeout(() => {
      if (add) {
        // do something
      }
      empty = false;
      add = false;
    }, 1000);
  }

  function chQty(opt: 'add' | 'del') {
    if (opt === 'add' && stock === 0) return;

    qty = qty + (opt === 'add' ? 1 : -1);

    if (opt === 'add' && qty >= stock) qty = stock;
    if (opt === 'del' && qty <= 0) qty = 0;
  }
</script>

<div class="bg-white rounded-md shadow-lg w-70">
  <div class="flex justify-center">
    <img
      class="rounded-t-lg object-contain h-70 w-70 justify-center"
      class:grayscale={stock === 0}
      src="/src/lib/assets/product.png"
      alt="product name"
    />
  </div>
  <div class="px-5 pb-8">
    <div class="flex items-center justify-between">
      <span class="text-xl font-semibold tracking-tight text-stone-800">
        {name}
      </span>
      <span class="text-lg font-bold text-orange-900">฿{price}</span>
    </div>

    <span class="text-stone-800 font-bold">
      {type}
    </span>

    <div>
      <span class="text-sm text-stone-500 pb-10">คงเหลือ: {stock} กิโลกรัม</span>
      <form class="max-w-full mx-auto mt-3">
        <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900">
          ระบุขนาด (กิโลกรัม):
        </label>
        <div class="relative flex items-center w-full">
          <button
            type="button"
            id="decrement-button"
            onclick={() => chQty('del')}
            class="bg-stone-100 border border-stone-300 rounded-s-lg p-3 h-11 hover:bg-stone-200 cursor-pointer"
          >
            <svg
              class="w-3 h-3 text-stone-900 flex items-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            id="quantity-input"
            type="text"
            class="bg-stone-50 border-x-0 border border-stone-300 h-11 text-center text-stone-900 text-sm w-full block py-2.5"
            bind:value={qty}
            max={maxOrder}
            required
          />

          <button
            type="button"
            id="increment-button"
            class="bg-stone-100 border border-stone-300 rounded-e-lg p-3 h-11 hover:bg-stone-200 cursor-pointer"
            onclick={() => chQty('add')}
          >
            <svg
              class="w-3 h-3 text-stone-900 flex items-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <p
          class="mt-2 text-xs font-medium transtion duration-300"
          class:text-stone-500={!empty}
          class:text-red={empty}
          class:shake={empty}
        >
          ระบุขนาดที่ต้องการก่อนกด เพิ่มลงในรถเข็น
        </p>
      </form>
    </div>

    <div class="flex items-center justify-center mt-5">
      <button
        disabled={stock === 0 ? true : false}
        onclick={toCart}
        class="w-full text-white bg-orange-900 hover:bg-orange-950 font-medium rounded-md text-sm py-2.5 text-center cursor-pointer disabled:bg-stone-400 disabled:cursor-not-allowed"
      >
        <span>{stock === 0 ? 'สินค้าหมด' : 'เพิ่มลงในรถเข็น'}</span>
      </button>
    </div>
  </div>
</div>

<!-- Toast -->
{#if add}
  <div class="fixed bottom-5 left-1/2 transform -translate-x-1/2">
    <div
      class="flex items-center w-full max-w-xs p-4 mb-4 text-stone-500 bg-white rounded-lg shadow-lg"
      role="alert"
      in:classes={{
        duration: 300,
        base: 'ease-out duration-300',
        from: 'translate-y-full',
        to: 'translate-y-0',
      }}
      out:classes={{
        duration: 200,
        base: 'ease-in duration-200',
        from: 'opacity-100',
        to: 'opacity-0',
      }}
    >
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg"
      >
        <svg class="w-5 h-5 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <div class="ms-3 text-sm font-normal">เพิ่มสินค้าลงในรถเข็นแล้ว</div>
      <button
        onclick={() => (add = false)}
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
{/if}

<style>
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(3px);
    }
    40% {
      transform: translateX(-3px);
    }
    60% {
      transform: translateX(3px);
    }
    80% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .shake {
    animation: shake 0.3s ease-in-out forwards;
  }
</style>
