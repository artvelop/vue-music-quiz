import { inject, ref, watchEffect } from 'vue';
import { sendApi } from '@/apis';
import camelcaseKeys from 'camelcase-keys';
import { useLoadingScreen } from '@/provide/useLoadingScreen';
import { ApiService } from '@/apis/api.service';

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
  const { openLoadingScreen, closeLoadingScreen, loadingScreen } = useLoadingScreen();

  const getApiQuestionList = async (): Promise<QuestionApiResponse[] | null> => {
    try {
      openLoadingScreen();

      const { api } = new ApiService();

      const {
        data: { results },
      } = await api.get('/api.php', {
        params: {
          amount: 10,
          category: 12,
          type: 'boolean',
        },
      });

      const response = results.map((item: any) => {
        return {
          ...item,
          result: false,
        };
      });

      return camelcaseKeys(response);
    } catch (err) {
      return null;
    } finally {
      console.log('SCREEN :: ', loadingScreen.value);
      closeLoadingScreen();
    }
  };

  return {
    getApiQuestionList,
  };
};
