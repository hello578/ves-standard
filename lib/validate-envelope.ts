import type { ErrorObject } from "ajv"
import generatedValidate from "./generated/validate-envelope.mjs"

type EnvelopeValidator = ((data: unknown) => boolean) & { errors?: ErrorObject[] | null }

export const validateEnvelope = generatedValidate as EnvelopeValidator

