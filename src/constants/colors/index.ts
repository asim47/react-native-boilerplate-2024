export const commonColors = {
  black: '#000',
  white: '#fff',
  grey: 'grey',
};

export const dark = {
  primaryColor: 'red',
  secondaryColor: 'blue',
  backgroundColorPrimary: '#444',
  backgroundColorSecondary: '#333',
  textPrimary: '#fff',
  textSecondary: '#ddd',
  error: 'red',
  success: 'green',
  info: 'blue',
  warn: 'orange',
  ...commonColors,
};

export const light = {
  primaryColor: 'black',
  secondaryColor: 'red',
  backgroundColorPrimary: '#fff',
  backgroundColorSecondary: '#eee',
  textPrimary: '#000',
  textSecondary: '#333',
  error: 'red',
  success: 'green',
  info: 'blue',
  warn: 'orange',
  ...commonColors,
};

export const colors = {
  dark,
  light,
};
