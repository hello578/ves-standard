"use client"

import Script from "next/script"
import { useSyncExternalStore } from "react"

const measurementId = "G-E3J9NHYRVH"
const consentStorageKey = "ves-analytics-consent"

type AnalyticsConsent = "granted" | "denied" | "pending"

const getConsent = (): AnalyticsConsent => {
  if (typeof window === "undefined") return "pending"
  const storedConsent = window.localStorage.getItem(consentStorageKey)
  return storedConsent === "granted" || storedConsent === "denied" ? storedConsent : "pending"
}

const subscribeToConsent = (onChange: () => void) => {
  window.addEventListener("ves-analytics-consent-change", onChange)
  return () => window.removeEventListener("ves-analytics-consent-change", onChange)
}

export function GoogleAnalytics() {
  const consent = useSyncExternalStore(subscribeToConsent, getConsent, () => "pending")

  const chooseConsent = (value: Exclude<AnalyticsConsent, "pending">) => {
    window.localStorage.setItem(consentStorageKey, value)
    window.dispatchEvent(new Event("ves-analytics-consent-change"))
  }

  if (process.env.NODE_ENV !== "production") return null
  if (consent === "granted") {
    return (
      <>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');`}
        </Script>
      </>
    )
  }
  if (consent === "denied") return null

  return (
    <aside className="analytics-consent" aria-label="Analytics preference">
      <div>
        <strong>Help improve VES</strong>
        <p>With your permission, we use privacy-conscious analytics to understand which public standards pages are useful. No evidence packages are collected.</p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" className="button button-secondary" onClick={() => chooseConsent("denied")}>Decline</button>
        <button type="button" className="button button-primary" onClick={() => chooseConsent("granted")}>Allow analytics</button>
      </div>
    </aside>
  )
}
