import { css } from 'styled-components';

export const _color = {
  primary: '#464646',
  secondary: '#878787',
  accent: '#fdb826',
  dark: '#152140',
  light: '#D9D6D8',
  black: '#000',
  white: '#fff',
  gray: '#464a4c',
  page: '#929292',
};

export const _font = {
  primary:
    '"Roboto", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  secondary:
    '"Roboto Slab", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
};

export const _breakpoint = {
  phone: 576,
  mobile: 768,
  tablet: 992,
  desktop: 1200,
};

export const _media = Object.keys(_breakpoint).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${_breakpoint[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const _mediaUp = Object.keys(_breakpoint).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${_breakpoint[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
