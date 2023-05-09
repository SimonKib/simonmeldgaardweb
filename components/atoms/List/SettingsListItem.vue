<template>
  <div class="flex gap-4 py-4 items-center justify-between">
    <div class="w-11 flex items-center justify-center">
      <slot name="icon" />
    </div>
    <div class="grow flex items-center">
      <slot />
    </div>
    <div class="w-11 flex items-center justify-center">
      <slot name="icon-right">
        <svg
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="-rotate-90"
        >
          <path
            d="M1 1.00001L7.75 7.26733L14.5 1.00001"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      </slot>
    </div>
  </div>
</template>
