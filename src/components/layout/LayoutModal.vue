<template>
  <teleport to="body">
    <div class="fixed flex w-[100vw] h-[100vh] items-center justify-center inset-0 bg-[rgba(0,0,0,0.5)] z-[1000]">
      <slot></slot>
    </div>
  </teleport>
</template>
<script setup lang="ts">
</script>
