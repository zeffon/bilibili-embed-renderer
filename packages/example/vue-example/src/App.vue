<template>
  <div>
    <BilibiliEmbedRenderer aid="3787944" :width="800" :height="600" />
    <bilibili-embed aid="3787944" :width="800" :height="600" />
  </div>
</template>

<script setup lang="ts">
import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer'
import 'vue-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
