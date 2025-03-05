<template>
  <div class="text-3xl font-bold underline bg-red-900">
    dpa;wdaw;dmwap;dwam

    <div>{{ t('TEST') }}</div>
    <div class="flex gap-2">
      <button @click="switchLocale('en')">EN</button>
      <button @click="switchLocale('th')">TH</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t, locale } = useI18n()
const { setLanguageCode } = useLanguageStore()

const switchLocale = (l: 'en' | 'th') => {
  setLanguageCode(l)
  locale.value = l
}

const test = ref('test')
</script>
