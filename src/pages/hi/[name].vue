<template>
  <div flex-col-center>
    <div i-carbon:pedestrian text-4xl />
    <p>hi,{{ user.savedName }}</p>
    <p text-sm opacity-75>动态路由演示</p>

    <template v-if="user.otherNames.length">
      <div mt-4 text-sm>
        <em opacity-75>其他:</em>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>

    <el-button type="success" @click="router.back()">
      返回
    </el-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute('/hi/[name]')
const user = useUserStore()

watchEffect(() => {
  user.setNewName(route.params.name)
})
</script>
