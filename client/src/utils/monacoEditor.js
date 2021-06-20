import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';
import {THEME} from '@/constants/monacoEditor'

export const editor = monaco.editor
export let editorInstance = null

export function monacoSetConfiguration() {
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  });

  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2015,
    allowNonTsExtensions: true,
    alwaysStrict: true,
    noUnusedParameters: true,
    noImplicitUseStrict: true,
    noUnusedLocals: true
  });
}

export function initEditor({container, language, theme}) {
  monacoSetConfiguration()

  editor.defineTheme('light', THEME.light)
  editor.defineTheme('dark', THEME.dark)

  editor.setTheme(theme)

  editorInstance = editor.create(container, {
    language,
    minimap: {
      enabled: false
    },
    automaticLayout: true,
    contextmenu: false,
    readOnly: true,
  })
}

export function changeTheme(theme) {
  editor.setTheme(theme)
}

export function changeLanguage(language) {
  if(editorInstance) {
    editor.setModelLanguage(editorInstance.getModel(), language);
  }
}

