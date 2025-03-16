<template>
  <div class="p-3">
    <div class="flex gap-2 items-center">
      <Icon name="material-symbols:info-outline" size="50" />
      <span class="text-2xl font-semibold font-kanit">เกี่ยวกับมาลาวี | About Malawi</span>
    </div>

    <!-- Detail -->
    <div class="z-10 bg-inherit sticky">
      <div v-for="(item, index) in 1000" :key="index">{{ item }}</div>
    </div>
  </div>
</template>
