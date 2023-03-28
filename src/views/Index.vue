<template>
  <div class="flex flex-col h-screen">
    <router-view class="grow" name="default" />
    <ModalLoading />
  </div>
</template>
<script setup lang="ts">
import ModalLoading from '@/components/modal/ModalLoading.vue';
</script>
