<template>
  <button
    type="button"
    class="btn"
    :class="[`btn-${currentTheme}`]">
    <slot></slot>
  </button>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ThemedButton',
  computed: mapGetters(['currentTheme'])
}
</script>
