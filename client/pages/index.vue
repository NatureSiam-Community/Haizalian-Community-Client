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
    <div class="z-10 bg-inherit sticky space-y-5">
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
        <div class="h-[400px] bg-green-200 w-[300px] relative">
          <div class="space-y-2 absolute bottom-0 p-3 bg-black/50 w-full h-28">
            <p class="text-xl font-roboto text-center">ชีวิต</p>
            <p class="text-center font-light">ใช้ชีวิตอย่างปราศจากข้อกังวลที่คุณไม่ได้ก่อขึ้นเอง เป็นตัวคุณในแบบที่คุณเป็น</p>
          </div>
        </div>
        <div class="h-[400px] bg-green-200 w-[300px] relative">
          <div class="space-y-2 absolute bottom-0 p-3 bg-black/50 w-full h-28">
            <p class="text-xl font-roboto text-center">ความฝัน</p>
            <p class="text-center font-light">ฝันได้ไกลกว่า ไปได้ไกลกว่า มีโอกาสมากมายให้คุณได้ไขว่คว้า</p>
          </div>
        </div>
        <div class="h-[400px] bg-green-200 w-[300px] relative">
          <div class="space-y-2 absolute bottom-0 p-3 bg-black/50 w-full h-28">
            <p class="text-xl font-roboto text-center">การเดินทาง</p>
            <p class="text-center font-light">เกิดใหม่เป็นคุณบนที่ที่คู่ควร และเลือกเส้นทางด้วยตัวคุณเอง</p>
          </div>
        </div>
      </div>

      <div v-for="(item, index) in 1000" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'full',
})
</script>

<style scoped lang="scss">
.testdwadwadwa {
  color: var(text-red-400);
  background-color: var(bg-red-400);
}
</style>
