<template>
  <div class="relative">
    <div class="absolute top-0 rotate-180 w-full brightness-30 flex justify-center overflow-clip">
      <img src="/pages/index/blog-explore-1.png" alt="planet" class="w-full min-w-[800px]" />
    </div>
    <div v-if="profile" class="md:space-y-6 space-y-4 overflow-clip">
      <div class="flex justify-center p-5">
        <div class="flex gap-1 md:gap-3 w-full md:max-w-[100vh] flex-1 items-center flex-row">
          <div
            class="md:w-36 w-20 h-20 md:h-36 rounded-full shadow-lg bg-white shrink-0"
            :style="{ backgroundImage: `url(${profile.images.profile})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
          >
            <img src="" class="w-full h-full rounded-full" />
          </div>
          <div class="p-3 md:space-y-3 space-y-1">
            <div class="sm:text-lg md:text-2xl font-roboto tracking-wider font-semibold flex gap-1 line-clamp-1">
              <span class="text-white">{{ profile.profileName.firstName }}</span>
              <span class="text-white">{{ profile.profileName.middleName }}</span>
              <span class="text-white">{{ profile.profileName.lastName }}</span>
            </div>
            <div class="text-base md:text-lg font-roboto tracking-wider flex">
              <span class="text-white">{{ profile.profileName.nickName }}</span>
            </div>
            <div class="flex gap-2 items-center">
              <button
                :disabled="true"
                class="rounded-full shadow-md cursor-not-allowed w-7 h-7 md:w-10 md:h-10 bg-white flex items-center justify-center"
              >
                <div class="w-44 h-44 flex items-center justify-center">
                  <Icon name="uil:facebook-f" size="2vh"></Icon>
                </div>
              </button>
              <button
                :disabled="true"
                class="rounded-full shadow-md cursor-not-allowed w-7 h-7 md:w-10 md:h-10 bg-white flex items-center justify-center"
              >
                <Icon name="mdi:twitter" size="2vh"></Icon>
              </button>
              <!-- <button class="rounded-full shadow-md cursor-pointer w-10 h-10 bg-white flex items-center justify-center">
              <Icon name="material-symbols:10k-outline-sharp" size="30"></Icon>
            </button>
            <button class="rounded-full shadow-md cursor-pointer w-10 h-10 bg-white flex items-center justify-center">
              <Icon name="material-symbols:10k-outline-sharp" size="30"></Icon>
            </button> -->
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center p-5">
        <div class="space-y-4 w-full flex-1 md:max-w-[100vh]">
          <div class="bg-green-700/15 border border-green-500/50 rounded-md font-kanit flex gap-2 items-center justify-center p-3">
            <Icon name="material-symbols:add-triangle-outline" size="20" class="text-green-500"></Icon>
            <span class="text-green-500">ยินดีต้อนรับ! อันนี้แค่หน้า Mock Up นะ เก็บรหัสหลังบัตรเอาไว้ดี ๆ :></span>
          </div>
          <div class="bg-white/15 border border-white/50 rounded-md font-kanit text-sm md:text-base items-center p-3 text-center">
            <p class="text-white">คุณได้รับคำชวนเข้าสู่โลกของมาลาวี! เมื่อเว็บของเราพร้อมแล้ว เดี๋ยวจะเอาอะไรมาอัพเดทให้นะ!</p>
            <p class="text-white">
              สมาชิกที่ได้บัตรเชิญ รับทันที <span class="text-yellow-200">บัญชีมาลาวีพรีเมี่ยม!</span> ไม่รู้หรอกว่าเอาไว้ทำอะไร แต่มันดูแพงดี :v
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ROUTES } from '~/config/permission.route'
import { citizenList } from '~/models/mocked/citizen.mocked'

const router = useRouter()

const profile = ref<undefined | any>(undefined)
const getCitizenProfileById = (id: string) => {
  const data = citizenList.find((citizen) => citizen.cid === id)
  if (!data) router.push({ path: ROUTES.PROFILE_CITIZEN.path })
  profile.value = data
}

onMounted(() => {
  const id = router.currentRoute.value.params.id
  if (id) {
    getCitizenProfileById(id.toString())
  }
})
</script>

<style lang="scss" scoped></style>
