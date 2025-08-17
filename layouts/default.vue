<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="grow bg-[#0f0f0f]">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
