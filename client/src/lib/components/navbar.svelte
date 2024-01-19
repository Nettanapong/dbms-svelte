<script lang="ts">
  import AuthenModal from '$lib/components/authen-modal.svelte';
  import Cart from '$lib/components/cart.svelte';
</script>

<nav class="bg-white shadow-lg">
  <div class="flex items-center justify-between mx-12 p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse no-underline">
      <img src="/src/lib/assets/coffee-beans.png" class="h-10" alt="Logo" />
      <span
        class="self-center text-2xl font-bold whitespace-nowrap text-stone-800 hover:text-orange-800"
        >COFFEE</span
      >
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul
        class="flex flex-col mt-4 md:space-x-10 rtl:space-x-reverse md:flex-row md:my-0 items-center"
      >
        <li>
          <a href="/" class="no-underline"
            ><span class="h-8 w-8 font-semibold text-stone-800 hover:text-orange-800"
              >สินค้าทั้งหมด</span
            ></a
          >
        </li>
        <li>
          <AuthenModal />
        </li>
        <li>
          <Cart />
        </li>
      </ul>
    </div>
  </div>
</nav>
