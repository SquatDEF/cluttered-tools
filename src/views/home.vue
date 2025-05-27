<script setup lang="ts">
import { projectsConfig } from '@/config'
import { useRouter } from 'vue-router'

const router = useRouter()
const handlerClick = (pathName: string) => {
  router.push({ name: pathName })
}
</script>

<template>
  <div class="flex items-center justify-center flex-col h-screen">
    <div class="flex items-center justify-center flex-wrap gap-4">
      <div
        v-for="(project, index) in projectsConfig"
        :key="index"
        class="flex flex-col items-center gap-2 md:w-40 sm:w-full border-gray-300 border-1 p-5 hover:shadow-lg transition-shadow duration-300 rounded-lg"
        @click="handlerClick(project.pathName)"
      >
        <div class="w-full h-30 flex items-center justify-center">
          <img :src="project.img" alt="" />
        </div>
        <span class="text-sm">{{ project.name }}</span>
      </div>
    </div>
  </div>
</template>
