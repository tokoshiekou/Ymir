<template>
  <div :class="`relative ${props.width}`">
    <input
      v-model="search"
      type="text"
      :placeholder="placeholder"
      class="input-bordered w-full px-2 py-2 rounded-lg text-center text-sm text-gray-500
        border border-slate-100 focus:outline-none focus:ring-1 focus:ring-amber-400
        transition ease-in-out duration-150 placeholder-gray-700"
      @focus="openDropdown = true"
      @blur="closeDropdown"
    />
    <div
      v-if="openDropdown && filteredOptions.length > 0"
      class="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto"
    >
      <ul>
        <li
          v-for="item in filteredOptions"
          :key="item.value"
          class="px-2 py-2 text-center text-sm text-gray-700 cursor-pointer hover:bg-amber-400 focus:outline-none"
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
import type { ISelectOption } from '../../types/ISelectOption.ts'

interface IProps {
  SelectOptions: ISelectOption[]
  selected: string | number
  width: string
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:selected'])

const search = ref('')
const placeholder = ref('')
const openDropdown = ref(false)

const closeDropdown = () => {
  setTimeout(() => {
    openDropdown.value = false
  }, 200)
}

onMounted(() => {
  props.SelectOptions.forEach((item) => {
    if (item.value === props.selected) {
      placeholder.value = item.label
    }
  })
})

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

const selectHandle = (item: ISelectOption) => {
  emit('update:selected', item.value)
  placeholder.value = item.label
  search.value = ''
  openDropdown.value = false
}
</script>