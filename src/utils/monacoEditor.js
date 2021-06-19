import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import {THEME} from '@/constants/monacoEditor'

export const editor = monaco.editor

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

export function init({container, language, theme, onDidChangeModelContent}) {
  monacoSetConfiguration()

  editor.defineTheme('light', THEME.light)
  editor.defineTheme('dark', THEME.dark)

  editor.setTheme(theme)

  const standaloneCodeEditor = editor.create(container, {
    language,
    minimap: {
      enabled: false
    },
    automaticLayout: true,
    contextmenu: false,
  })

  standaloneCodeEditor.onDidChangeModelContent(onDidChangeModelContent.bind(standaloneCodeEditor))

  return standaloneCodeEditor
}

export function changeTheme(theme) {
  editor.setTheme(theme)
}

export function changeLanguage(model, language) {
  editor.setModelLanguage(model, language);
}

