<template>
  <div class="header">
    <Combobox
      :SelectOptions="timezoneList"
      :selected="timezone"
      :width="'w-24'"
      @update:selected="($event: number) => (timezone = $event)"
    />
  </div>
</template>

<script setup lang="ts">
import TimeZoneList from '../../json/TimeZoneList.json'
import type { ISelectOption } from '../../types/ISelectOption.ts'
import { getTimezone } from '../../utils/getTimezone.ts'
import Combobox from '../../components/Combobox/Combobox.vue'

const timezoneList = TimeZoneList as ISelectOption[]
const timezone = getTimezone()
</script>
