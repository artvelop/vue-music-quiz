<template>
  <LayoutModal>
    <div class="bg-white rounded flex flex-col gap-[8px] p-[8px]">
      <div class="text-2xl text-gray5 text-center mt-[16px] mb-[16px] w-[320px]">
        퀴즈는 간단하게 <br />
        총 10문제 입니다
      </div>
      <button class="bg-primary text-white rounded p-[8px] hover:opacity-70 active:bg-primary" @click="handlePlayQuiz">
        네 알겠습니다
      </button>
      <button class="bg-primarySub text-white rounded p-[8px] hover:opacity-70 active:bg-primarySub" @click="onClose">
        다시 돌아갈래요
      </button>
    </div>
  </LayoutModal>
</template>
<script setup lang="ts">
import LayoutModal from '@/components/layout/LayoutModal.vue';
import { useRouter } from 'vue-router';

type Props = {
  onClose: () => void;
}

const { onClose } = defineProps<Props>();

const router = useRouter();

const handlePlayQuiz = async () => {
  router.push('/play');
}

</script>