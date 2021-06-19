import {setItem} from '@/utils/localStorage'

export default {
  changeTheme(store) {
    const theme = store.state.theme === 'light' ? 'dark' : 'light'
    setItem('theme', theme)
    store.commit('changeTheme', theme)
  },
  changeLanguage(store, language) {
    setItem('language', language)
    store.commit('changeLanguage', language)
  }
}
