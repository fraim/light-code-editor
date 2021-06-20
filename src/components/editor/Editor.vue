<template>
  <div class="editor-container d-flex flex-column">
    <div id="editor" ref="editorRef"></div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {editorInstance, initEditor} from '@/utils/monacoEditor'
import {socket} from '@/utils/socket'

export default {
  name: 'Editor',
  data() {
    return {
      isAdmin: false,
    }
  },
  computed: mapGetters(['currentTheme', 'currentLanguage', 'codeEditorInstance']),
  methods: {
    ...mapActions(['setCodeEditorInstance', 'changeLanguage']),
  },
  mounted() {
    socket.on('connected', () => {
      if(this.isAdmin === true) {
        editorInstance.updateOptions({ readOnly: false })
        socket.emit('filedata', {
          value: editorInstance.getValue(),
          language: this.currentLanguage,
        })
      }
    })

    socket.on('users', users => {
      if(users.length === 1) {
        this.isAdmin = true
      }
    })

    socket.on('admin', () => {
      this.isAdmin = true
      editorInstance.updateOptions({ readOnly: false })
      editorInstance.onDidChangeModelContent(e => socket.emit('code changing', e))
    })

    socket.on('resetdata', data => {
      editorInstance.setValue(data)
      editorInstance.updateOptions({ readOnly: false })
    })

    socket.on('code changing', data => {
      editorInstance.getModel().applyEdits(data.changes)
    })

    socket.on('language changing', language => {
      if(!this.isAdmin) {
        this.changeLanguage(language)
      }
    })

    initEditor({
      container: this.$refs.editorRef,
      language: this.currentLanguage,
      theme: this.currentTheme,
    })
  },
}
</script>

<style lang="scss">
@import "src/style/index";

.editor-container {
  height: 100%;

  #editor {
    height: calc(100% - #{$header-height});
  }
}
</style>
