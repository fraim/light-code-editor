import {getItem} from '@/utils/localStorage'

export default () => ({
  theme: getItem('theme') || 'light',
  language: getItem('language') || 'text',
})
