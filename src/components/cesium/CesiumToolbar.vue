<template>
    <ul class="cesium-toolbar">
        <li class="cesium-toolbar-item" @click="current == CompA ? (show = !show) : (current = CompA, show=true)" >A</li>
        <li class="cesium-toolbar-item" @click="current == CompB ? (show = !show) : (current = CompB, show=true);" >B</li>
        <li class="cesium-toolbar-item">C</li>
        <li class="cesium-toolbar-item">D</li>
        <li class="cesium-toolbar-item">E</li>
        <li class="cesium-toolbar-item">F</li>
        <li class="cesium-toolbar-item">G</li>
    </ul>
    <keep-alive>
        <component v-show="show" class="cesium-tool-container" :is="current" ></component>
    </keep-alive>
</template>
  
<script setup lang="ts">

import { shallowRef , ref } from 'vue'

import CompA from '@/components/cesium/ComA.vue'
import CompB from '@/components/cesium/ComB.vue'

const current = shallowRef(CompA)
const show = ref(false)

</script>
  
<style scoped>
</style>
  