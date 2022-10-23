<template>
    <div class="cesium-main" id="cesium-1"></div>
</template>
  
<script setup lang="ts">

import { onMounted } from 'vue'

import * as Cesium from 'cesium';

onMounted(() => {

    const viewer = new Cesium.Viewer('cesium-1');

})
</script>
  
<style scoped>
</style>
  