

export const COLORS = {
  fbBlue: '#4366B7',
  lightBlue: '#D4EFFF',
  darkBlue: '#0318CE',
  primary: '#4366B7', // Blue
  // primary: '#4f83ff', // Blue
  secondary: '#5D2DFD', // Dark purple
  white: '#fff',
  black: '#000000',
  green: '#0B9D30',
  red: '#CC0000',
  gray: '#6A6A6A',
  lightGray: '#D2D2D2',
  lightGray1: '#999898',
  unSelectedGray: '#C0C0C0',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,
};

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 1.84,
  elevation: 1,
};

export const SHADOW_BLUE = {
  shadowColor: COLORS.primary,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};
export const FONTS = {
  h1: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
  body6: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body6, lineHeight: 18},
};

const appTheme = {COLORS, SIZES, FONTS, SHADOW, SHADOW_BLUE};

export default appTheme;
