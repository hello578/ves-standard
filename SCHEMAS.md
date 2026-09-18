# VES 1.2 Draft public artefacts

The public JSON Schemas use JSON Schema Draft 2020-12. The claims-referral files are fictional test vectors containing opaque, redacted, non-personal data.

Published artefacts:

- `ves-decision-envelope-1.2-draft.schema.json`
- `ves-external-evidence-object-1.2-draft.schema.json`
- `fictional-claims-referral-qualified.json`
- `fictional-claims-referral-qualified-result.json`

Validate with any Draft 2020-12 implementation that resolves the published `$id` values. The browser demonstration on `/verify` performs structural validation only; it does not verify signatures or retrieve external evidence.

Result statuses apply to a submitted package and stated profile: `Verified`, `Qualified`, `Incomplete`, `Indeterminate`, and `Failed`. They do not rate an organisation, person, vendor, product, or decision outcome.

The fictional verification result is not generated solely by JSON Schema validation. It illustrates a wider profile assessment with explicit limitations. A structurally valid envelope has not, by that fact alone, earned any VES overall result status.
