<template>
  <div mb-10px>
    <p>{{ count }}</p>
    <el-button class="inc" @click="inc()">
      +
    </el-button>
    <el-button class="dec" @click="dec()">
      -
    </el-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>
