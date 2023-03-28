<template>
  <LayoutDefault>
    <div class="p-[16px] flex flex-col justify-center items-center w-[100%] h-[100%]">
      <div class="font-medium color-pirmary text-5xl text-primary">
        Music
      </div>
      <div class="font-medium line-clamp-2 color-pirmary text-5xl text-white m-[8px]">
        랜덤 퀴즈
      </div>
      <button
        @click="handleOpenModal"
        class="bg-primary p-[8px] mt-[8px] w-[200px] rounded text-white hover:bg-primarySub active:bg-primary"
      >
        퀴즈 풀기
      </button>
    </div>
    <ModalQuizStart v-if="openModal" :on-close="handleCloseModal" />
  </LayoutDefault>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LayoutDefault from '@/components/layout/LayoutDefault.vue';
import ModalQuizStart from './components/ModalQuizStart.vue';

const openModal = ref(false);

const handleOpenModal = () => {
  openModal.value = true;
}

const handleCloseModal = () => {
  openModal.value = false;
}

</script>