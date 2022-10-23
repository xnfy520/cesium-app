<template>
    <ul class="cesium-toolbar">
        <li class="cesium-toolbar-item" @click="setCurrentTab(CompA)" >
            <font-awesome-icon icon="list" />
        </li>
        <li class="cesium-toolbar-item" @click="setCurrentTab(CompB)" >
            <font-awesome-icon icon="ruler-combined" />
        </li>
        <li class="cesium-toolbar-item">
            <font-awesome-icon icon="flag" />
        </li>
        <li class="cesium-toolbar-item">
            <font-awesome-icon icon="plane" />
        </li>
        <li class="cesium-toolbar-item">
            <font-awesome-icon icon="award" />
        </li>
        <li class="cesium-toolbar-item">
            <font-awesome-icon icon="archway" />
        </li>
        <li class="cesium-toolbar-item">
            <font-awesome-icon icon="atom" />
        </li>
    </ul>
    <keep-alive>
        <component v-show="show" class="cesium-tool-container" :is="current" ></component>
    </keep-alive>
</template>
  
<script setup lang="ts">

import { shallowRef , ref } from 'vue'

import CompA from '@/components/cesium/ComA.vue'
import CompB from '@/components/cesium/ComB.vue'

let current = shallowRef(CompA)
const show = ref(false)

const setCurrentTab = (comp:any) =>{
    console.log(comp);
    
    if (current.value == comp){
        show.value = !show.value
    }else{
        current.value = comp
        show.value = true
    }
}

</script>
  
<style scoped>
</style>
  