<template>
  <div>
    hello login index
  </div>
</template>

<script setup lang="ts">

import { getCurrentInstance } from 'vue';

const { proxy }: any = getCurrentInstance();

async function handleLogin() {
  const res = await proxy.$api.login.getToken()
  console.log(res);
}

handleLogin()

</script>

<style scoped>
</style>
