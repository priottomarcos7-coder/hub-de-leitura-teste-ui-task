const { spawn } = require('child_process')
const env = Object.assign({}, process.env)
delete env.ELECTRON_RUN_AS_NODE

const args = process.argv.slice(2)
const child = spawn('npx', ['cypress', ...args], { env, stdio: 'inherit', shell: true })
child.on('exit', (code) => process.exit(code))
