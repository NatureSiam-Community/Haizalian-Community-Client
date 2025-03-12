<template>
  <div class=""></div>
  <!-- <div class="mx-auto w-[400px]">
    <div>Citizen List</div>

    <div class="space-y-2">
      <div v-for="(item, index) in citizenList" :key="index" class="w-full bg-gray-100">
        <p class="font-light text-sm">
          <span>{{ `ID : ${item.cid}` }}</span>
        </p>
        <p class="font-semibold">
          <span class="px-2">{{ `${item.profileName.firstName} ${item.profileName.middleName || ''} ${item.profileName.lastName || ''}` }}</span>
        </p>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts" setup>
import { citizenList } from '~/models/mocked/citizen.mocked'
</script>

<style scoped lang="scss">
.testdwadwadwa {
  color: var(text-red-400);
  background-color: var(bg-red-400);
  .testtest {
    color: darkgray;
  }
}
</style>
