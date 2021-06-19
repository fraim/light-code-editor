<template>
  <div class="editor-container d-flex flex-column">
    <div id="editor" ref="editorRef"></div>
    <div v-if="language === 'html'" ref="html-preview">

    </div>
  </div>
</template>

<script>
import {ref, onMounted, watchEffect, computed} from 'vue'
import {useStore} from 'vuex'
import {init, changeTheme, changeLanguage} from '@/utils/monacoEditor'

export default {
  name: 'Editor',
  setup() {
    const store = useStore()
    const editorRef = ref(null)
    const standaloneCodeEditor = ref()
    const standaloneCodeEditorValue = ref()

    const theme = computed(() => store.getters.currentTheme)
    const language = computed(() => store.getters.currentLanguage)

    watchEffect(() => {
      changeTheme(theme.value)
      if (standaloneCodeEditor.value) {
        changeLanguage(standaloneCodeEditor.value.getModel(), language.value)
      }
    })
    onMounted(() => standaloneCodeEditor.value = init({
      container: editorRef.value,
      language: language.value,
      theme: theme.value,
      onDidChangeModelContent: function () {
        standaloneCodeEditorValue.value = this.getValue().trim()
      }
    }))

    return {
      theme,
      language,
      editorRef,
      standaloneCodeEditor,
      standaloneCodeEditorValue,
    }
  },
}
</script>

<style lang="scss">
@import "src/style/index";

.editor-container {
  height: 100%;

  #editor {
    height: calc(50%);
  }
}
</style>
