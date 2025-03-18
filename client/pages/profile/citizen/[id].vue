<template>
  <div class="p-5 md:space-y-6 space-y-4 min-h-screen">
    <div class="flex justify-center">
      <div class="flex gap-3 items-center w-full md:max-w-[100vh] flex-1">
        <div class="md:w-36 w-28 h-28 md:h-36 rounded-full shadow-lg bg-white shrink-0">
          <img src="" class="w-full h-full rounded-full" />
        </div>
        <div class="p-3 md:space-y-3 space-y-2">
          <div class="text-lg md:text-2xl font-roboto tracking-wider font-semibold">
            <span class="text-white">Title here</span>
          </div>
          <div class="text-base md:text-lg font-roboto tracking-wider">
            <span class="text-white">Some text here</span>
          </div>
          <div class="flex gap-2 items-center">
            <button class="rounded-full shadow-md cursor-pointer w-10 h-10 bg-white flex items-center justify-center">
              <Icon name="material-symbols:10k-outline-sharp" size="20"></Icon>
            </button>
            <button class="rounded-full shadow-md cursor-pointer w-10 h-10 bg-white flex items-center justify-center">
              <Icon name="material-symbols:10k-outline-sharp" size="20"></Icon>
            </button>
            <button class="rounded-full shadow-md cursor-pointer w-10 h-10 bg-white flex items-center justify-center">
              <Icon name="material-symbols:10k-outline-sharp" size="20"></Icon>
            </button>
            <button class="rounded-full shadow-md cursor-pointer w-10 h-10 bg-white flex items-center justify-center">
              <Icon name="material-symbols:10k-outline-sharp" size="20"></Icon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="space-y-4 w-full flex-1 md:max-w-[100vh]">
        <div class="bg-white p-3 rounded-md w-full">SCREAM</div>
        <div class="bg-white p-3 rounded-md w-full">SCREAM</div>
        <div class="bg-white p-3 rounded-md w-full">SCREAM</div>
        <div class="bg-white p-3 rounded-md w-full">SCREAM</div>
        <div class="bg-white p-3 rounded-md w-full">SCREAM</div>
        <div class="bg-white p-3 rounded-md w-full">SCREAM</div>
        <div class="bg-white p-3 rounded-md w-full">SCREAM</div>
        <div class="bg-white p-3 rounded-md w-full">SCREAM</div>
      </div>
    </div>
    <!-- {{ router.currentRoute.value.params.id }}
    {{ getLanguage() }} -->
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { getLanguage } = useLanguageStore()

const getZitizenProfileById = (id: string) => {
  console.log(id)
}

onMounted(() => {
  const id = router.currentRoute.value.params.id
  if (id) {
    getZitizenProfileById(id.toString())
  }
})
</script>

<style lang="scss" scoped></style>
