<template>
  <div v-if="props.isOpen" class="settings h-40 w-full bg-black">
    {{ `${options} + hhhh` }}
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { SettingOptions } from '../../types/IOptions'

const options: Ref<SettingOptions[]> = ref([])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})
</script>
