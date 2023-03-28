<template>
  <LayoutDefault>
    <div class="flex flex-col p-[16px] w-[100%] h-[100%]">
      <div class="flex flex-col">
        <h1 class="text-white text-[56px]">Q{{ quizSequence }}</h1>
        <div class="text-white text-[24px]" v-html="currentQuiz?.question">
        </div>
        <div class="bg-primary rounded gap=[8px] flex p-[8px] text-white w-fit mt-[8px]">
          난이도 {{ difficulty }}
        </div>
      </div>
    </div>
    <div class="mt-auto flex flex-col gap-[8px] p-[16px]">
      <button @click="handleClickAnswer('True')" class="bg-primary hover:bg-primarySub active:bg-primary rounded gap=[8px] flex justify-center items-center p-[8px] text-white">
        맞습니다
      </button>
      <button @click="handleClickAnswer('False')" class="bg-primary hover:bg-primarySub active:bg-primary rounded gap=[8px] flex justify-center items-center p-[8px] text-white">
        아닙니다
      </button>
    </div>
  </LayoutDefault>
</template>
<script setup lang="ts">
import LayoutDefault from '@/components/layout/LayoutDefault.vue';
import { QuestionApiResponse } from '@/composable/api/useQuestionApi';
import { useQuizList } from '@/provide/useQuizList';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const { quizList, step, nextStep, isEndStep, setQuizResult, initQuizList } = useQuizList();

const currentQuiz = ref<QuestionApiResponse | null>(null);
const router = useRouter();


onMounted(async () => {
  await initQuizList();
  currentQuiz.value = quizList.value[step.value];
})

watchEffect(() => {
  if (isEndStep.value) {
    router.push('/result');
  }
  currentQuiz.value = quizList.value[step.value];
})

const quizSequence = computed(() => step.value + 1);

const getDifficultyLevel = () => {
  if (!currentQuiz.value) return 0;

  const { difficulty } = currentQuiz.value;

  if (difficulty === 'easy') return 1;
  if (difficulty === 'medium') return 2;
  if (difficulty === 'hard') return 3;

  return 0;
}

const difficulty = computed(() => Array.from({ length: getDifficultyLevel() })
  .map(() => '🔥')
  .join(''));

const handleClickAnswer = (answer: 'True' | 'False') => {
  if (!currentQuiz.value) return;

  const { correctAnswer } = currentQuiz.value;

  if (correctAnswer === answer) {
    setQuizResult({ result: true, step: step.value })
  }

  if (correctAnswer !== answer) {
    setQuizResult({ result: false, step: step.value })
  }

  nextStep();
}


</script>