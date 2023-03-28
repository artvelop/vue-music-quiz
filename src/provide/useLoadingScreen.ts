import { PROVIDE_KEYS } from '@/constants/provideKey';
import { inject, Ref, ref } from 'vue';

export type LoadingScreenProvider = Ref<boolean>;

export const useLoadingScreen = () => {
  const loadingScreen = inject(
    PROVIDE_KEYS.LOADING_SCREEN
  ) as LoadingScreenProvider;

  const openLoadingScreen = () => {
    loadingScreen.value = true;
  };

  const closeLoadingScreen = () => {
    loadingScreen.value = false;
  };

  return {
    loadingScreen,
    openLoadingScreen,
    closeLoadingScreen,
  };
};
