<template>
  <div class="p-3">
    <div class="flex gap-2 items-center text-white">
      <Icon name="material-symbols:info-outline" size="50" />
      <span class="text-2xl font-semibold font-kanit">เกี่ยวกับมาลาวี | About Malawi</span>
    </div>

    <div>
      <iframe
        class="w-full h-[30em] md:h-[40em] lg:h-[50em]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=pkWNAKeW84tjGCkh&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Detail -->
    <!-- <div class="z-10 bg-inherit sticky">
      <div v-for="(item, index) in 1000" :key="index">{{ item }}</div>
    </div> -->
  </div>
</template>
