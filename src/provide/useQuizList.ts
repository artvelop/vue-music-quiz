import { QuestionApiResponse, useQuestionApi } from '@/composable/api/useQuestionApi';
import { PROVIDE_KEYS } from '@/constants/provideKey';
import { computed, inject, ref, Ref } from 'vue';

export type QuizListProvider = Ref<QuestionApiResponse[]>;

export const useQuizList = () => {
  const { getApiQuestionList } = useQuestionApi();
  const quizList = inject(PROVIDE_KEYS.QUIZ_LIST) as QuizListProvider;

  const step = ref(0);

  const initQuizList = async () => {
    const response = await getApiQuestionList();

    console.log('HELLO');

    if (response) {
      quizList.value = response;
    }
  };

  const getQuizList = () => quizList.value;

  const isAvailableChangeStep = step.value <= 10 && step.value >= 0;

  const isEndStep = computed(() => step.value >= 10);

  const nextStep = () => {
    if (isAvailableChangeStep) {
      step.value += 1;
    }
  };
  const prevStep = () => {
    if (isAvailableChangeStep) {
      step.value -= 1;
    }
  };

  const setQuizResult = ({ result, step }: { result: boolean; step: number }) => {
    quizList.value[step].result = result;
  };

  return {
    getQuizList,
    initQuizList,
    nextStep,
    prevStep,
    setQuizResult,
    step,
    isEndStep,
    quizList,
  };
};
