<template>
  <component :is="'header'"></component>
  <editor></editor>
</template>

<script>
import Header from './components/header/Header'
import Editor from './components/editor/Editor'

export default {
  name: 'App',
  components: {
    Header,
    Editor
  }
}
</script>

<style lang="scss">
  #app {
    height: 100vh;
    overflow: hidden;
  }
</style>
