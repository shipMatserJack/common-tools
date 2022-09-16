const { getRollupConfig, startBuild } = require('')

const entry = 'src/index.ts'

const esmRollupConfig = getRollupConfig({
  entry,
  outputFile: 'dist/bundle.esm.js',
  format: 'esm'
})

const cjsRollupConfig = getRollupConfig({
  entry,
  outputFile: 'dist/bundle.common.js',
  format: 'cjs'
})

async function buildAll () {
  await startBuild(esmRollupConfig)
  await startBuild(cjsRollupConfig)
}

buildAll()
