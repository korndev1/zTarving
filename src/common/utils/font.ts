import {Platform} from 'react-native';

export const isIOS = () => {
  return Platform.OS == 'ios';
};

export const fontFamilies = {
  PROMT: {
    regular: isIOS() ? 'Sukhumvit Set' : 'Prompt-Regular',
    medium: isIOS() ? 'Sukhumvit Set Medium' : 'Prompt-Medium',
    semibold: isIOS() ? 'Sukhumvit Set Semi Bold' : 'Prompt-SemiBold',
    bold: isIOS() ? 'Sukhumvit Set Bold' : 'Prompt-Bold',
  },
};

export const getFontFamily = (
  weight: 'regular' | 'medium' | 'semibold' | 'bold',
) => {
  const selectedFontFamily = fontFamilies.PROMT
  return selectedFontFamily[weight];
};
