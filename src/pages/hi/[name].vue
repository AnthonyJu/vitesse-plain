<template>
  <div flex-col-center>
    <div i-carbon:pedestrian text-4xl />
    <p>hi,{{ name }}</p>
    <p text-sm opacity-75>动态路由演示</p>

    <template v-if="user.otherNames.length">
      <p mt-4 text-sm>
        <em opacity-75>其他:</em>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </p>
    </template>

    <el-button type="success" @click="router.back()">
      返回
    </el-button>
  </div>
</template>

<script setup lang="ts">
const { name } = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(name)
})
</script>
