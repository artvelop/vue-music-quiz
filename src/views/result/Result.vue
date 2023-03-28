import LayoutDefault from '@/components/layout/LayoutDefault.vue';

<template>
  <LayoutDefault>
    <div class="flex flex-col p-[16px] w-[100%] h-[100%]">
      <div class="flex flex-col items-center">
        <div class="text-white text-[24px]">
          🎉 수고하셨습니다 🎉
        </div>
        <div class="flex gap-[8px] mt-[16px]">
          <button @click="handleClickRetry" class="rounded bg-gray5 text-white hover:bg-primary active:bg-gray5 w-[160px] p-[8px]">다시 풀기</button>
          <button @click="handleClickgoHome" class="rounded bg-gray5 text-white hover:bg-primary active:bg-gray5 w-[160px] p-[8px]">홈으로</button>
        </div>
      </div>
      <div v-if="isPefectScore === false" class="flex flex-col">
        <div class="text-white text-[24px] mt-[24px] mb-[24px]">오답 노트</div>
        <div class="flex flex-col gap-[8px]">
          <IncorrectNote
            v-for="quiz in inCorrectQuizList"
            :key="quiz.question"
            :question="quiz.question"
            :correct-answer="quiz.correctAnswer"
          />
        </div>
        <div class="h-[32px]" />
      </div>
      <div v-if="isPefectScore === true" class="flex flex-1 flex-col justify-center items-center text-white text-center text-[24px]">
          결과는 만점입니다! <br />
          수고하셨습니다👍
      </div>
    </div>
  </LayoutDefault>
</template>
<script setup lang="ts">
import LayoutDefault from '@/components/layout/LayoutDefault.vue';
import { useQuizList } from '@/provide/useQuizList';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import IncorrectNote from './components/IncorrectNote.vue';

const router = useRouter();
const { quizList } = useQuizList();

const inCorrectQuizList = computed(() => quizList.value.filter(quiz => quiz.result === false));
const isPefectScore = computed(() => quizList.value.some(({ result }) => result));

const handleClickRetry = () => {
  router.push('/play');
}

const handleClickgoHome = () => {
  router.push('/');
}

</script>
