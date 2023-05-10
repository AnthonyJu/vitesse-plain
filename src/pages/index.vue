<template>
  <div class="flex-col-center">
    <img src="/favicon.svg" class="h-40px w-40px">

    <a href="https://github.com/AnthonyJu/vitesse-plain" target="_blank" color-blue>
      vitesse-plain
    </a>

    <p class="py-5 text-sm">
      固执己见的 Vite 项目启动模板
    </p>

    <TheInput
      v-model="name"
      placeholder="What's your name?"
    />

    <el-button type="primary" mt-25px @click="go">
      确定
    </el-button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
defineOptions({ name: 'IndexPage' })

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value) {
    router.push(`/hi/${encodeURIComponent(name.value)}`)
  }
  else {
    ElMessage({
      message: 'Please enter your name',
      type: 'warning',
    })
  }
}
</script>
