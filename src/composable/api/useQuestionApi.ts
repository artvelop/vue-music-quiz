import { inject, ref, watchEffect } from 'vue';
import { sendApi } from '@/apis';
import camelcaseKeys from 'camelcase-keys';
import { useLoadingScreen } from '@/provide/useLoadingScreen';
import { ApiService } from '@/apis/api.service';
import { QuestionApi } from '@/apis/controller/QuestionApi';

export interface QuestionApiResponse {
  category: string;
  correctAnswer: 'False' | 'True';
  difficulty: 'easy' | 'medium' | 'hard';
  incorrectAnswers: ['False' | 'True'];
  question: string;
  type: string;
  result: boolean;
}

export const useQuestionApi = () => {
  const { openLoadingScreen, closeLoadingScreen } = useLoadingScreen();

  const getApiQuestionList = async (): Promise<QuestionApiResponse[] | null> => {
    try {
      openLoadingScreen();

      const questionApi = new QuestionApi();

      const response = await questionApi.getList({
        amount: 10,
        category: 12,
        type: 'boolean',
      });

      return response;
    } catch (err) {
      return null;
    } finally {
      closeLoadingScreen();
    }
  };

  return {
    getApiQuestionList,
  };
};
