export default {
  changeTheme(state, theme = 'light') {
    state.theme = theme
  },
  changeLanguage(state, language = 'javascript') {
    state.language = language
  }
}
