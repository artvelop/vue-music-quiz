import { LoadingScreenProvider } from '@/provide/useLoadingScreen';
import { QuizListProvider } from '@/provide/useQuizList';
import { InjectionKey } from 'vue';

export const PROVIDE_KEYS = {
  LOADING_SCREEN: Symbol() as InjectionKey<LoadingScreenProvider>,
  QUIZ_LIST: Symbol() as InjectionKey<QuizListProvider>,
} as const;
