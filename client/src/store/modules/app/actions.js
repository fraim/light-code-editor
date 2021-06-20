import {setItem} from '@/utils/localStorage'
import {changeTheme, changeLanguage} from '@/utils/monacoEditor'
import {socket} from '@/utils/socket'

export default {
  changeTheme(store) {
    const theme = store.getters.currentTheme === 'light' ? 'dark' : 'light'
    changeTheme(theme)
    setItem('theme', theme)
    store.commit('changeTheme', theme)
  },
  changeLanguage(store, language) {
    socket.emit('language changing', language)
    changeLanguage(language)
    setItem('language', language)
    store.commit('changeLanguage', language)
  },
}
