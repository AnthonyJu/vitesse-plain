<template>
  <div flex flex-col items-center>
    <img src="favicon.svg" h-40px w-40px>
    <p>
      <a color-blue href="https://github.com/AnthonyJu/vitesse-plain" target="_blank">
        vitesse-plain
      </a>
    </p>
    <p py-10px text-sm>
      固执己见的 Vite 项目启动模板
    </p>

    <div py-2 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      @keydown.enter="go"
    />

    <div>
      <el-button type="primary" mt-25px :disabled="!name" @click="go">
        确定
      </el-button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
function go() {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>
