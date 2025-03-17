<template>
  <div class="">
    <div class="m-5 flex gap-3">
      <div class="w-32 h-32 rounded-full shadow-lg">
        <img src="" class="w-full h-full rounded-full" />
      </div>
      <div class="p-3">
        <div class="text-2xl font-roboto tracking-wider font-semibold">
          <span>Title here</span>
        </div>
        <div class="text-lg font-roboto tracking-wider">
          <span>Some text here</span>
        </div>
        <div class="flex gap-2 items-center">
          <button class="rounded-full shadow-md cursor-pointer w-10 h-10">
            <div>
              <Icon name="material-symbols:10k-outline-sharp" size="20"></Icon>
            </div>
          </button>
          <button class="rounded-full shadow-md cursor-pointer w-10 h-10">
            <div>
              <Icon name="material-symbols:10k-outline-sharp" size="20"></Icon>
            </div>
          </button>
          <button class="rounded-full shadow-md cursor-pointer w-10 h-10">
            <div>
              <Icon name="material-symbols:10k-outline-sharp" size="20"></Icon>
            </div>
          </button>
          <button class="rounded-full shadow-md cursor-pointer w-10 h-10">
            <div>
              <Icon name="material-symbols:10k-outline-sharp" size="20"></Icon>
            </div>
          </button>
        </div>
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
