<template>
  <main class="min-h-screen">
    <slot name="header">
      <HeaderTop />
    </slot>
    <div class="pb-24 flex flex-col gap-8">
      <div class="flex flex-col gap-8 min-h-screen">
        <slot />
      </div>
      <Footer />
    </div>
  </main>
</template>
