<template>
  <div class="h-screen relative">
    <div class="fixed top-0 w-full z-50">
      <Navbar mode="full-page"></Navbar>
    </div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>
