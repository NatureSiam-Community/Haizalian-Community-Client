<template>
  <div class="p-3 flex justify-center text-white relative min-h-screen">
    <div class="max-w-[500px] flex-1 p-3 space-y-7 z-10">
      <div class="text-lg md:text-2xl">
        <p class="text-4xl text-amber-100">
          <span class="font-kanit">มาลาวี</span>
        </p>
        <div class="text-amber-100 flex gap-2 items-center text-sm">
          <span>Fantasy</span>
          <span>Sci-Fi</span>
          <span>Slice of Life</span>
        </div>
      </div>

      <div class="font-kanit">
        <p>“ เมื่อเงยหน้ามองขึ้นไปบนท้องฟ้า เราจะเห็นจุดเล็ก ๆ มากมายนับล้านที่ส่องแสงระยิบระยับ คุณคิดว่าบนจุดเหล่านั้นจะมีใครอยู่บ้างไหม? “</p>
      </div>

      <div class="flex justify-center opacity-70">
        <img src="/pages/index/blog-explore-2.png" alt="planet" class="w-screen h-44 object-cover" />
      </div>

      <div class="font-kanit leading-7">
        <p>
          ไฮทาก้าเป็นจักรวาลคู่ขนานที่เราเหล่ามนุษย์นั้นยังเป็นอยู่เหมือนเดิมในปัจจุบัน
          เพียงแต่มีอะไรบางอย่างที่อยู่นอกเหนือสิ่งที่เรารู้เพิ่มเติมเข้ามาเกี่ยวข้อง
          คุณอาจจะเจอเข้ากับใครบางคนที่มาจากต่างดาวเพื่อชักชวนคุณไปสู่พื้นที่ของพวกเขา โดยเสนอชีวิตและโอกาสใหม่ ๆ ให้กับคนที่โชคดีและคู่ควรอย่างคุณ
          แลกกับการละทิ้งทุกอย่างในอดีตเอาใว้บนโลกใบเก่า
        </p>
      </div>

      <div class="font-kanit leading-7">
        <p>
          ภาพจักรวาลที่เรารู้จักก็ยังเป็นเช่นนั้นอยู่เหมือนเดิม เพียงแต่สิ่งที่เราเห็นอาจจะไม่ใช่สิ่งที่มันเป็น
          แท้จริงแล้วโลกที่เราอาศัยอยู่ในทุกวันนี้ไม่ใช่พื้นที่เอกเทศ แต่อยู่ใต้การดูแลของดาวดวงอื่น
          ซึ่งมนุษยชาติยังไม่พัฒนาตนเองได้ดีมากพอที่พวกเขาจะติดต่อมาหา
        </p>
      </div>

      <div class="font-kanit leading-7">
        <p>
          ยังมีอีกหลายสิ่งที่รอให้คุณได้ค้นพบในอวกาศอันกว้างใหญ่ อีกหลายสิ่งที่รอให้คุณได้ไปสัมผัส
          ความน่าตื่นเต้นของการเดินทางที่จะพาคุณไปสู่จุดหมายใหม่ ๆ ที่คุณไม่เคยเห็นมาก่อน
          ฉันจะเล่าสิ่งที่คุณควรจะรู้เบื้องต้นเอาใว้ในเอกสารการเดินทางที่จะเชียนขึ้นในเร็ววัน
        </p>
      </div>

      <div class="font-kanit leading-7">
        <p>แล้วคุณล่ะ อยากจะไปมาลาวีกับพวกเราไหม?</p>
      </div>

      <div class="flex justify-center opacity-70">
        <img src="/pages/index/blog-explore-3.png" alt="planet" class="w-screen h-52 object-contain" />
      </div>

      <div class="font-kanit flex justify-center py-2">
        <button
          @click="goLogin()"
          class="p-3 bg-black/20 rounded-md border-2 border-white hover:text-cyan-500 cursor-pointer duration-300 hover:border-cyan-500"
        >
          <div class="flex gap-2 items-center justify-center">
            <span>ออกเดินทางไปกับเรา</span>
            <Icon name="fa:space-shuttle" size="20"></Icon>
          </div>
        </button>
      </div>
    </div>

    <div class="absolute bottom-0 w-full brightness-30 flex justify-center overflow-clip">
      <img src="/pages/index/blog-explore-1.png" alt="planet" class="w-full min-w-[800px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ROUTES } from '~/config/permission.route'

useHead({
  title: 'Haizalia - เกี่ยวกับเรา',
})

const router = useRouter()

const goLogin = () => {
  router.push(ROUTES.INDEX_LOGIN.path)
}
</script>
