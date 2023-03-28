<template>
  <teleport to="body" v-if="loadingScreen">
    <div class="fixed flex w-[100vw] h-[100vh] items-center justify-center inset-0 bg-[rgba(0,0,0,0.5)] z-[9999]">
      <h1 class="text-white" >로딩중입니다...</h1>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import { useLoadingScreen } from '@/provide/useLoadingScreen';

const { loadingScreen } = useLoadingScreen();
</script>