import { editor } from 'monaco-editor'

export const monacoOptions: editor.IStandaloneEditorConstructionOptions = {
  readOnly: false,
  minimap: { enabled: false },
  // overviewRulerLanes: 0,
  // overviewRulerBorder: false,
  // scrollbar: {
  //   vertical: 'auto',
  //   horizontal: 'hidden',
  //   handleMouseWheel: true,
  // },
  scrollBeyondLastLine: false,
  wordWrap: 'on',
  theme: 'vs-dark',
}

export const languageMeta = {
  javascript: {
    value: 'javascript',
    label: 'JavaScript',
  },
  python: {
    value: 'python',
    label: 'Python',
  },
}
