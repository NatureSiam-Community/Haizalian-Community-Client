<template>
  <div class="bg-black text-white relative">
    <!-- Banner and Header -->
    <!-- Background image at @/public/index-page.jpg -->
    <div class="h-[60vh] z-0 sticky top-0" style="background-image: url('index-page.jpg'); background-size: cover; background-position: center">
      <div class="top-0 w-full h-full bg-black/60 flex items-center justify-center">
        <div class="justify-center p-3 text-white mt-16">
          <div class="text-2xl font-kanit font-bold text-center m-5">Welcome to Haizalia</div>
          <div class="text-lg text-center">The website is currently hellishly working in progress but at least it is done within a week...</div>
          <div class="text-lg text-center">Join our roleplay and Venture into the world of Malawi</div>
          <div class="flex h-[15vh] justify-center items-center">
            <img src="@/public/icon/haizalian-icon.png" alt="logo" class="w-16 h-16 brightness-200" />
          </div>
        </div>
      </div>
    </div>

    <!-- Detail -->
    <div class="z-10 local-main-body sticky space-y-10">
      <div class="flex justify-center">
        <div class="max-w-[500px] space-y-5 p-3 md:p-5">
          <p class="text-3xl font-roboto text-center">สำรวจดวงดาวอันห่างไกล</p>
          <p class="font-kanit tracking-wider font-light text-center">
            ความจริงแล้วโลกของเราไม่ได้เป็นเพียงดาวดวงเดียวที่โดดเดียวอยู่ในกาแล็กซีอันกว้างใหญ่ เมือมองไปยังท้องฟ้าก็จะพบว่ามีดาวดวงอื่น ๆ
            และเพื่อนใหม่อีกมากมายที่รอคุณอยู่
          </p>
        </div>
      </div>

      <div class="flex gap-5 items-center justify-center">
        <div v-for="(item, index) in headerList.firstContent" :key="index" class="h-[400px] bg-green-200 w-[300px] relative">
          <div class="space-y-2 absolute bottom-0 p-3 bg-black/50 w-full h-28">
            <p class="text-xl font-roboto text-center">{{ item.title }}</p>
            <p class="text-center font-light">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="text-center w-[500px]">
          <p class="text-xl font-roboto">Header</p>
          <p class="font-light">Another description</p>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-[50rem] flex-1 gap-5">
          <div v-for="(item, index) in headerList.secondContent" :key="index" class="flex-1 bg-green-300 h-[250px] relative">
            <div class="absolute bottom-0 p-3 bg-black/40 w-full">
              <p class="text-lg text-center">{{ item.title }}</p>
              <p class="text-lg text-center font-light">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div v-for="(item, index) in 1000" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'full',
})

const headerList = computed(() => ({
  firstContent: [
    { title: 'Life', description: 'Something...', imageUrl: '/index/content-1.jpg' },
    { title: 'Dream', description: 'Something...', imageUrl: '/index/content-z.jpg' },
    { title: 'Journal', description: 'Something...', imageUrl: '/index/content-3.jpg' },
  ],
  secondContent: [
    { title: 'SOmething', description: 'Alsom something', imageUtl: '/index/content-4.jpg' },
    { title: 'SOmething', description: 'Alsom something', imageUtl: '/index/content-5.jpg' },
  ],
}))
</script>

<style scoped lang="scss">
.local-main-body {
  // background gradiand from black to white then to black, left to right
  background: linear-gradient(90deg, #0d001b, #130125, #0d001b);
}
</style>
