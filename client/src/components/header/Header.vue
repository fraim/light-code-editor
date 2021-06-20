<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="[`navbar-${currentTheme}`, `bg-${currentTheme}`]">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <i class="bi bi-code"></i>
        LightCodeEditor
        <i class="bi bi-code-slash"></i>
      </a>
      <div class="d-flex">
        <form class="me-3">
          <themed-select
            :options="options"
            :value="currentLanguage"
            @change="changeLanguage">
          </themed-select>
        </form>

        <div class="form-check form-switch navbar-text">
          <label
            for="darkMode"
            class="form-check-label">
            <i class="bi bi-brightness-high-fill" v-if="currentTheme === 'light'"></i>
            <i class="bi bi-moon-fill" v-else></i>
            Dark mode
          </label>
          <input
            id="darkMode"
            type="checkbox"
            class="form-check-input"
            :checked="currentTheme === 'dark'"
            @change="changeTheme"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ThemedSelect from '../themed_select/ThemedSelect'

export default {
  name: 'Header',
  data() {
    return {
      options: [
        {value: 'text', label: 'Text'},
        {value: 'javascript', label: `JavaScript`},
        {value: 'typescript', label: 'TypeScript'},
        {value: 'html', label: 'HTML'},
        {value: 'css', label: 'CSS'},
        {value: 'json', label: 'JSON'},
        {value: 'xml', label: 'XML'},
        {value: 'python', label: 'Python'},
      ]
    }
  },
  components: {ThemedSelect},
  methods: mapActions(['changeTheme', 'changeLanguage']),
  computed: mapGetters(['currentTheme', 'currentLanguage']),
}
</script>

<style lang="scss">
@import 'src/style/index';

.navbar {
  height: $header-height;
}
</style>
