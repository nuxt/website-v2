const { join } = require('path')
const DocsServer = require('./server')

async function main() {
	const docsServer = new DocsServer({
    port: 3001,
    docsDir: join(__dirname, '..', '..', 'docs'),
    repo: 'nuxt/docs',
    watch: true
  })
	await docsServer.cloneRepo()
	await docsServer.init()
	await docsServer.listen()
}

main()
