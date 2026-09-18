export type VerificationStatus = "Verified" | "Qualified" | "Incomplete" | "Indeterminate" | "Failed"

export function StatusPill({ status }: { status: VerificationStatus }) {
  return <span className={`status-pill status-${status.toLowerCase()}`}>{status}</span>
}

