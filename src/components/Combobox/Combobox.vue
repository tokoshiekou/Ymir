<template>
  <div class="relative" :class="props.width">
    <input
      v-model="search"
      type="text"
      :placeholder="placeholder"
      class="input-bordered w-full rounded-lg border border-slate-100 px-2 py-2 text-center text-sm text-gray-500 placeholder-gray-700 transition duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-amber-400"
      @focus="openDropdown = true"
      @blur="closeDropdown"
    />
    <div
      v-if="openDropdown && filteredOptions.length > 0"
      class="scrollbar-hidden absolute z-10 mt-1 max-h-48 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-lg"
    >
      <ul v-for="item in filteredOptions" :key="item.value">
        <li
          class="cursor-pointer px-2 py-2 text-center text-sm text-gray-700 hover:bg-amber-400 focus:outline-none"
          @click="selectHandle(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { SelectOptions } from '../../types/IOptions.ts'
// Define...

interface IProps {
  SelectOptions: SelectOptions[]
  selected: string | number
  width: string
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:selected'])

const search = ref('')
const placeholder = ref('')
const openDropdown = ref(false)

// Computed...
const filteredOptions = computed(() => {
  return search.value === ''
    ? props.SelectOptions
    : props.SelectOptions.filter((item) => {
        return item.label
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(search.value.toLowerCase().replace(/\s+/g, ''))
      })
})

// Handle func...
const closeDropdown = () => {
  setTimeout(() => {
    openDropdown.value = false
  }, 200)
}

const selectHandle = (item: SelectOptions) => {
  emit('update:selected', item.value)
  placeholder.value = item.label
  search.value = ''
  openDropdown.value = false
}

// Lifecycle hooks...
onMounted(() => {
  props.SelectOptions.forEach((item) => {
    if (item.value === props.selected) {
      placeholder.value = item.label
    }
  })
})
</script>
