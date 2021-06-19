import {getItem} from '@/utils/localStorage'

export default () => ({
  theme: getItem('theme'),
  language: getItem('language'),
})
