<template>
  <div w-250px>
    <el-input
      v-model="modelValue"
      v-bind="$attrs"
      autocomplete="off"
      text-center
    />
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>()
</script>
