<template>
  <select
    class="form-select"
    :value="value"
    :class="[`bg-${currentTheme}`, `text-${currentTheme === 'light' ? 'dark' : 'light'}`]"
    @change="$emit('change', $event.target.value)">
    <option
      v-for="option in options"
      :value="option.value"
      :key="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ThemedSelect',
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    }
  },
  emits: ['change'],
  computed: mapGetters(['currentTheme']),
}
</script>

<style scoped>

</style>
