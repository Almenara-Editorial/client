declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mp: any
  }
}

window.mp = window.mp || {}
