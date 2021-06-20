export const THEME = {
  light: {
    base: 'vs',
    inherit: true,
    rules: [
      {background: 'f8f9fa'},
      {foreground: '212529'}
    ],
    colors: {
      'editor.foreground': '#212529',
      'editor.background': '#f8f9fa',
    }
  },
  dark: {
    base: 'vs-dark',
    inherit: true,
    rules: [
      {background: '212529'},
      {foreground: 'f8f9fa'}
    ],
    colors: {
      'editor.foreground': '#f8f9fa',
      'editor.background': '#212529',
    }
  }
}
