import {createStore} from 'vuex'

import {appModule} from './modules'

export default createStore({
  modules: {
    app: appModule
  }
})
