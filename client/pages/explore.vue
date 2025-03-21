<template>
  <div class="p-3 wrapper mt-16">
    <div class="flex gap-2 items-center text-white">
      <Icon name="material-symbols:info-outline" size="50" />
      <span class="text-2xl font-semibold font-kanit">ยังไม่เปิดค่ะ ;-;</span>
    </div>

    <div>
      <iframe
        class="w-full h-auto lg:h-[50em]"
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

<script setup lang="ts">
useHead({
  title: 'U R ROLLED',
})
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800% 1800%;

  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;
}

@-webkit-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-moz-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-o-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
</style>
