<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div i-carbon-warning inline-block text-4xl />
    <RouterView />
    <el-button type="warning" text-sm m="3 t8" @click="router.back()">
      返回
    </el-button>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
</script>
