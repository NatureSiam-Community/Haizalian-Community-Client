<template>
  <div class="">
    <div></div>
    {{ router.currentRoute.value.params.id }}
    {{ getLanguage() }}
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
