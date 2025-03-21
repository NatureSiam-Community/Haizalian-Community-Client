<template>
  <div class="p-3 text-white">
    <div>ไม่ต้องห่วงนะ เรายังไม่มี API ให้ใช้ด้วยซ้ำ</div>

    <div>เพื่อสมัครเป็นสมาชิก Haizalian, คุณจะต้องมีอายุอย่างน้อย 15 ปีขึ้นไป</div>

    <div>
      <form @submit.prevent="submitLoginDetail()" class="space-y-3">
        <div class="flex flex-col w-40 gap-2">
          <label for="fotm-username">ชื่อผู้ใช้</label>
          <input id="fotm-username" class="p-1 bg-white rounded-md placeholder:text-gray-500 text-black" placeholder="Username" />
        </div>
        <div class="flex flex-col w-40 gap-2">
          <label for="fotm-password">รหัสผ่าน</label>
          <input id="fotm-password" type="password" class="p-1 bg-white rounded-md placeholder:text-gray-500 text-black" placeholder="Password" />
        </div>
        <button class="bg-blue-800 text-white hover:brightness-90 duration-300 cursor-pointer p-1 rounded-md">เข้าสู่ระบบ</button>
      </form>
    </div>
    <!-- <div>สำหรับโซนผู้ใหญ่ เด็กจะเข้าถึงไม่ได้อยู่แล้ว</div> -->
  </div>
</template>

<script lang="ts" setup>
import { ROUTES } from '~/config/permission.route'

useHead({
  title: 'Haizalia - เข้าสู่ระบบ',
})

const router = useRouter()

const submitLoginDetail = () => {
  router.push({ path: ROUTES.INDEX_EXPLORE.path })
}
</script>
