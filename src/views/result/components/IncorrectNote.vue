<template>
  <div class="bg-gray7 rounded flex flex-col gap-[16px] p-[8px]">
    <div class="text-white">
      {{ question }}
    </div>
    <div :class="correctAnswer === 'True' ? 'text-true' : 'text-false'">
      <span class="text-primary">정답 : </span>
      {{ correctAnswer }}
    </div>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    question: string;
    correctAnswer: 'False' | 'True';
  }

const { question, correctAnswer } = defineProps<Props>();

</script>