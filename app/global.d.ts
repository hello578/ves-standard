// app/global.d.ts

export {}

declare global {
  interface Window {
    VeriscopicConsent?: {
      reset: () => void
    }
  }
}
