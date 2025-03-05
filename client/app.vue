<template>
  <div class="app">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const { t, locale } = useI18n()
const { getLanguage } = useLanguageStore()

onMounted(() => {
  locale.value = getLanguage()
})
</script>
