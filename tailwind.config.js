/** @type {import('tailwindcss').Config} */
/*const px0_10 = { ...Array.from(Array(11)).map((_, index) => {
    return index+`px`;
  })};
const px0_50 = { ...Array.from(Array(51)).map((_, index) => {
    return index+`px`;
  })};*/
const px0_100 = {
  ...Array.from(Array(101)).map((_, index) => {
    return index + `px`;
  }),
};
const px0_200 = {
  ...Array.from(Array(201)).map((_, index) => {
    return index + `px`;
  }),
};

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: 'rgb(0, 200, 150)',
      white: '#FFFFFF',
      black: '#000000',
      primarySub: '#62759F',

      gray1: '#FAFAFA',
      gray2: '#FAFAFA',
      gray3: '#DBDBDB',
      gray4: '#CBCBCB',
      gray5: '#A6A6A6',
      gray6: '#656565',
      gray7: '#424242',
      gray8: '#303030',
      gray9: '#181818',

      bg: '#272C30',
      subPrimary: '#303E57',
      bgLine: '#22335410',
      card: '#8CC2FF',

      true: '#8CC2FF',
      false: '#f1959b',

      //snb
      snbPrimary: '#303E57',
      snbDefault: '#E9F2FF',
      snbHover: '#43587C',
      snbLine: '#4A5D7E',
    },
    extend: {
      fontSize: px0_100,
      lineHeight: px0_100,
      textAlign: px0_100,
      gap: px0_100,
      borderRadius: px0_100,
      padding: px0_200,
    },
    fontFamily: {
      landing: ['Spoqa Han Sans Neo', 'sans-serif'],
    },
    backgroundImage: {
      //icon
      visibilityOffRounded: 'url(/src/assets/icons/ico_visibility_off_rounded.svg)',
      notification: 'url(/src/assets/icons/ico_notification.svg)',

      //checkbox
      checkbox: 'url(/src/assets/icons/ico_checkbox.svg)',
      checkboxSelected: 'url(/src/assets/icons/ico_checkbox_selected.svg)',

      //arrow
      expandMoreRounded: 'url(/src/assets/icons/ico_expand_more_rounded.svg)',
      arrowDropDown: 'url(/src/assets/icons/ico_arrow_drop_down.svg)',
      arrowDropUp: 'url(/src/assets/icons/ico_arrow_drop_up.svg)',

      arrowLeft: 'url(/src/assets/icons/ico_arrow_left.svg)',
      arrowRight: 'url(/src/assets/icons/ico_arrow_right.svg)',
    },
    boxShadow: {
      header: '0 0 7px rgba(0,44,87,0.16)',
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide')],
};
