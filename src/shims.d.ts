declare interface Window {
  // extend the window
  [key: string]: any
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module '*.vue' {
  import type { DefineComponent, HtmlHTMLAttributes } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
