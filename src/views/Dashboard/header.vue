<template>
  <div
    class="header flex h-14 w-full flex-row items-center justify-between border-b px-1 shadow-sm"
  >
    <div class="basis-3/6">
      <Combobox
        :SelectOptions="timezoneList"
        :selected="timezone"
        :width="'w-full'"
        @update:selected="selectedHandle($event)"
      />
    </div>
    <div class="basis-1/6">
      <AdjustmentsHorizontalIcon class="size-6" @click="isOpen = !isOpen" />
    </div>
    <Teleport to="body">
      <Settings :isOpen="isOpen" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/solid'

import TimeZoneList from '../../json/TimeZoneList.json'
import type { SelectOptions } from '../../types/IOptions.ts'
import { getTimezone } from '../../utils/getTimezone.ts'
import { useSettingStore } from '../../store/useSettingStore.ts'

import Combobox from '../../components/Combobox/Combobox.vue'
import Settings from '../../views/Dashboard/settings.vue'
import { ref } from 'vue'

// Define...
const timezoneList = TimeZoneList as SelectOptions[]
const isOpen = ref(false)

const useSetting = useSettingStore()
let timezone = useSetting.getTimezone || getTimezone()

// Handle func...
const selectedHandle = (value: string) => {
  timezone = value
  useSetting.setTimezone(value)
}
</script>
