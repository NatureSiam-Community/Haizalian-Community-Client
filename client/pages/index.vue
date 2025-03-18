<template>
  <div class="bg-black text-white relative">
    <!-- Banner and Header -->
    <!-- Background image at @/public/index-page.jpg -->
    <div class="h-[60vh] z-0 sticky top-0" style="background-image: url('index-page.jpg'); background-size: cover; background-position: center">
      <div class="top-0 w-full h-full bg-black/60 flex items-center justify-center">
        <div class="justify-center p-3 text-white mt-16">
          <div class="text-2xl font-kanit font-bold text-center m-5">Welcome to Haizalia</div>
          <div class="sm:text-lg text-center">The website is currently hellishly working in progress but at least it is done within a week...</div>
          <div class="sm:text-lg text-center">Join our roleplay and Venture into the world of Malawi</div>
          <div class="flex h-[15vh] justify-center items-center">
            <img src="@/public/icon/haizalian-icon.png" alt="logo" class="w-16 h-16 brightness-200" />
          </div>
        </div>
      </div>
    </div>

    <!-- Detail -->
    <div class="z-10 local-main-body sticky space-y-10 pb-32">
      <div class="flex justify-center">
        <div class="max-w-[500px] space-y-5 p-3 md:p-5">
          <p class="text-xl md:text-3xl font-kanit text-center">สำรวจดวงดาวอันห่างไกล</p>
          <p class="font-kanit tracking-wider font-light text-center text-sm md:text-base">
            ความจริงแล้วโลกของเราไม่ได้เป็นเพียงดาวดวงเดียวที่โดดเดียวอยู่ในกาแล็กซีอันกว้างใหญ่ เมื่อมองขึ้นไปบนท้องฟ้า
            คุณจะพบว่ามีดาวดวงและเพื่อนใหม่อีกมากมายกำลังรอคุณอยู่
          </p>
        </div>
      </div>

      <div class="flex flex-wrap gap-5 items-center justify-center">
        <div
          v-for="(item, index) in headerList.firstContent"
          :key="index"
          class="h-[20em] w-full sm:w-[14em] md:h-[20em] xsm:w-[22em] lg:h-[25em] bg-purple-950 lg:w-[20em] relative"
          :style="{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
        >
          <div>dkwad</div>
          <div class="space-y-1 md:space-y-2 absolute bottom-0 p-1 lg:p-3 bg-black/50 w-full h-[5.2em] md:h-24 lg:h-28 overflow-clip">
            <p class="text-lg md:text-xl font-kanit text-center">{{ item.title }}</p>
            <p class="text-sm lg:text-base text-center font-light font-kanit line-clamp-2">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="max-w-[500px] space-y-5 p-3 md:p-5">
          <p class="text-3xl font-kanit text-center">เปิดให้บริการเร็ว ๆ นี้</p>
          <p class="font-light font-kanit text-center">ไม่รู้วันไหน แต่ขอหนีไปเล่นมายคราฟแปปนะ</p>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:w-[62.5rem] gap-5 sm:w-[44.5em] w-full">
          <div
            v-for="(item, index) in headerList.secondContent"
            :key="index"
            class="h-[20em] flex-1 md:h-[20em] lg:h-[20em] bg-purple-950 relative"
            :style="{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
          >
            <div class="space-y-1 md:space-y-2 absolute bottom-0 p-1 lg:p-2 bg-black/50 w-full h-[4.2em] md:h-[5em] overflow-clip">
              <p class="text-lg md:text-xl font-kanit text-center">{{ item.title }}</p>
              <p class="text-sm lg:text-base text-center font-light font-kanit line-clamp-2">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'full',
})

const headerList = computed(() => ({
  firstContent: [
    {
      title: 'การเชิญชวน',
      description: 'ใช้ชีวิตใหม่ในโลกใบใหม่ ที่เต็มไปด้วยความสนุกสนานและความตื่นเต้น',
      imageUrl: '/pages/index/content-1.jpg',
    },
    {
      title: 'ความฝัน',
      description: 'ปีกคู่นี้เป็นของคุณ จงฝันให้ไกล และพุ่งทะยานสู่ฝันพร้อมกับดวงดาวที่รายล้อม',
      imageUrl: '/pages/index/content-2.jpg',
    },
    {
      title: 'การค้นพบ',
      description: 'ค้นหาเพื่อนใหม่ สถานที่ใหม่ และประสบการณ์ใหม่รอบตัวคุณ',
      imageUrl: '/pages/index/content-3.jpg',
    },
  ],
  secondContent: [
    { title: 'วันนี้ดูยาวนานใช่ไหม?', description: 'มาพักผ่อนหย่อนใจในโลกของเรากันนะ', imageUrl: '/pages/index/content-4.jpg' },
    { title: 'ค้นหาเพื่อน', description: 'เรามีคนไทยออนไลน์ในนี้มากกว่า 496,497,152.25 คน! ใช่ก็แย่ล่ะ', imageUrl: '/pages/index/content-5.jpg' },
  ],
}))
</script>

<style scoped lang="scss">
.local-main-body {
  // background gradiand from black to white then to black, left to right
  background: linear-gradient(90deg, #0d001b, #130125, #0d001b);
}
</style>
