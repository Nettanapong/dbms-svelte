<script lang="ts">
  import classes from 'svelte-transition-classes';

  let isOpen = $state<boolean>(false);
  let isRegis = $state<boolean>(false);
</script>

<div>
  <button onclick={() => (isOpen = true)} class="cursor-pointer bg-white"
    ><svg
      class="h-8 w-8 text-stone-800 hover:text-orange-800"
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
      <div
        class="relative p-4 w-full max-w-md max-h-full"
        in:classes={{
          duration: 300,
          base: 'ease-out duration-300',
          from: 'opacity-0 translate-y-4',
          to: 'opacity-100 translate-y-0',
        }}
        out:classes={{
          duration: 200,
          base: 'ease-in duration-200',
          from: 'opacity-100 translate-y-0',
          to: 'opacity-0 translate-y-4',
        }}
      >
        <div class="relative bg-white rounded-md flex flex-col">
          <!-- Modal header -->
          <div class="p-2 flex justify-end">
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
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="px-4 pb-4 flex flex-row justify-center">
            {#if isRegis}
              <span class="text-xl font-semibold text-stone-900">ลงทะเบียน</span>
            {:else}
              <span class="text-xl font-semibold text-stone-900">ลงชื่อเข้าใช้</span>
            {/if}
          </div>
          <!-- Modal body -->
          <div class="px-4 py-6 flex flex-col gap-4">
            <button
              type="button"
              class="cursor-pointer w-full text-stone-900 bg-white hover:bg-stone-200 border border-stone-200 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
              ><svg
                class="w-5 h-5 me-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
              >
                <g fill="#316ff6"
                  ><g transform="scale(5.12,5.12)"
                    ><path
                      d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"
                    ></path></g
                  ></g
                >
              </svg>
              Facebook
            </button>
            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-70 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <span
                class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
                >or</span
              >
            </div>
            <button
              type="button"
              class="cursor-pointer w-full text-stone-900 bg-white hover:bg-stone-200 border border-stone-200 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
              ><svg
                class="w-5 h-5 me-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path><path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path><path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path><path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Google
            </button>
          </div>
          <!-- Modal footer -->
          <div class="p-4 flex justify-center">
            <div class="text-sm font-medium text-stone-500 dark:text-gray-300">
              {#if isRegis}
                มีบัญชีแล้ว? <button
                  onclick={() => (isRegis = false)}
                  class="bg-white cursor-pointer text-blue-700 hover:underline"
                  >ลงชื่อเข้าใช้</button
                >
              {:else}
                ไม่มีบัญชีใช่ไหม? <button
                  onclick={() => (isRegis = true)}
                  class="bg-white cursor-pointer text-blue-700 hover:underline">ลงทะเบียน</button
                >
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
