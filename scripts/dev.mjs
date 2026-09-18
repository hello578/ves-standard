import { spawn } from "node:child_process"

const args = process.argv.slice(2)
const translated = []

for (let index = 0; index < args.length; index += 1) {
  const argument = args[index]
  if (argument === "--host") {
    translated.push("--hostname")
    if (args[index + 1]) translated.push(args[++index])
  } else if (argument !== "--strictPort") {
    translated.push(argument)
  }
}

const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", ...translated], { stdio: "inherit" })
child.on("exit", (code, signal) => signal ? process.kill(process.pid, signal) : process.exit(code ?? 0))

