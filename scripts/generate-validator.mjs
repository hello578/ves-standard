import { readFile, mkdir, writeFile } from "node:fs/promises"
import Ajv2020 from "ajv/dist/2020.js"
import addFormats from "ajv-formats"
import standaloneCode from "ajv/dist/standalone/index.js"

const envelopeSchema = JSON.parse(await readFile(new URL("../public/schemas/ves-decision-envelope-1.2-draft.schema.json", import.meta.url), "utf8"))
const evidenceSchema = JSON.parse(await readFile(new URL("../public/schemas/ves-external-evidence-object-1.2-draft.schema.json", import.meta.url), "utf8"))
const exampleEnvelope = JSON.parse(await readFile(new URL("../public/examples/claims-referral-qualified.json", import.meta.url), "utf8"))
const ajv = new Ajv2020({ allErrors: true, strict: false, code: { source: true, esm: true } })
addFormats(ajv)
ajv.addSchema(evidenceSchema)
const validate = ajv.compile(envelopeSchema)
if (!validate(exampleEnvelope)) {
  console.error(validate.errors)
  process.exit(1)
}
const output = standaloneCode(ajv, validate)

await mkdir(new URL("../lib/generated/", import.meta.url), { recursive: true })
await writeFile(new URL("../lib/generated/validate-envelope.mjs", import.meta.url), output)
console.log("Example validates against VES 1.2 Draft schema")
