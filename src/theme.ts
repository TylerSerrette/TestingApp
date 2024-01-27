import { createTheme, DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

type ExtendedCustomColors =
  | 'MainColor'
  | 'SecondaryColor'
  | 'Alert'
  | 'Success'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    MainColor: [
      '#2196F3',
      '#2196F3',
      '#2196F3',
      '#2196F3',
      '#2196F3',
      '#2196F3',
      '#2196F3',
      '#2196F3',
      '#2196F3',
      '#2196F3',
    ],
    Alert: [
      '#F44336',
      '#F44336',
      '#F44336',
      '#F44336',
      '#F44336',
      '#F44336',
      '#F44336',
      '#F44336',
      '#F44336',
      '#F44336',
    ],
  },
});
