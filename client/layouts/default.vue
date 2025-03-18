<template>
  <div class="min-h-screen relative local-main-body">
    <div class="h-16">
      <div class="fixed top-0 w-full z-50">
        <Navbar mode="default"></Navbar>
      </div>
    </div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.local-main-body {
  // background gradiand from black to white then to black, left to right
  background: linear-gradient(90deg, #0d001b, #130125, #0d001b);
}
</style>
