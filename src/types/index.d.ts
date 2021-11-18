/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    mp: any
    paypal: any
  }
}

window.mp = window.mp || {}
window.paypal = window.paypal || {}
