<script setup lang="ts">
import { projectsConfig } from '@/config'

</script>

<template>
  <div class="home">
    <div class="home__list">
      <div v-for="(project, index) in projectsConfig" :key="index" class="home__item">
        <img :src="project.img" alt="" />
        <span>{{ project.name }}</span>
      </div>
    </div>
  </div>
</template>
