<template>
  <div flex flex-col items-center>
    <div text-4xl>
      <Iconify icon="carbon:pedestrian" />
    </div>
    <p>
      hi,{{ props.name }}
    </p>

    <p text-sm opacity-75>
      <span>动态路由演示</span>
    </p>

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

    <div>
      <el-button
        type="success"
        @click="router.back()"
      >
        返回
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>
