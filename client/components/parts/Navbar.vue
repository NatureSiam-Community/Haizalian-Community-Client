<template>
  <div class="h-16 text-white flex items-center justify-center" :class="props.mode === 'full-page' ? '' : 'bg-black'" :style="bgGradiaentOnScroll">
    <div class="flex items-center max-w-[500px] flex-1 justify-between tracking-widest">
      <div
        v-for="(item, index) in menu"
        :key="index"
        @click="goToDestination(item.path)"
        class="cursor-pointer flex justify-center h-16 flex-1 items-center hover:bg-black/20 duration-300 border-b-4 hover:border-cyan-300 text-base hover:text-lg"
        :class="item.path === router.currentRoute.value.path && item.type === 'link' ? 'text-lg bg-black/20 border-cyan-300' : 'border-transparent'"
      >
        <div v-if="item.type === 'link'">
          <span class="font-roboto">{{ item.text }}</span>
        </div>
        <div v-if="item.type === 'button'" class="shrink-0">
          <img src="@/public/icon/haizalian-icon.png" alt="logo" class="w-10 h-10 hover:h-12 hover:w-12 duration-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ROUTES } from '@/config/permission.route'

interface IProps {
  mode: 'full-page' | 'default'
}
type TMenu = {
  name?: string
  text?: string
  icon?: string
  path: string
  type: 'link' | 'button'
}

const router = useRouter()
const { t } = useI18n()

const props = defineProps<IProps>()

const goToDestination = (path: string) => {
  router.push(path)
}

const menu = computed<TMenu[]>(() => [
  {
    name: 'home',
    text: 'Home',
    path: ROUTES.INDEX.path,
    type: 'link',
  },
  {
    name: 'about',
    text: 'About',
    path: ROUTES.INDEX_ABOUT.path,
    type: 'link',
  },
  {
    path: ROUTES.INDEX.path,
    type: 'button',
  },
  {
    name: 'Login',
    text: 'Login',
    path: ROUTES.INDEX_LOGIN.path,
    type: 'link',
  },
  {
    name: 'Explore',
    text: 'Explore',
    path: ROUTES.INDEX_EXPLORE.path,
    type: 'link',
  },
])

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

const currentOpacityPercentage = ref(0)
const bgGradiaentOnScroll = computed(() => {
  if (props.mode !== 'full-page') return {}
  return {
    background: `linear-gradient(0deg, rgba(0, 0, 0, ${currentOpacityPercentage.value / 100}) 20%, rgba(0, 0, 0, ${
      40 + currentOpacityPercentage.value / 100
    }) 100%)`,
  }
})
const onScroll = (event: any) => {
  if (props.mode !== 'full-page') return
  if (event.target.documentElement.scrollTop < 600) {
    currentOpacityPercentage.value = Math.floor(event.target.documentElement.scrollTop / 6)
  } else {
    currentOpacityPercentage.value = 100
  }
}
</script>
