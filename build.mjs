import { glob } from 'glob'
import esbuild from 'esbuild'

async function build() {
  const files = await glob('solve/**/*.ts', {
    ignore: {
      ignored: (path) => /\.test\./.test(path.name)
    }
  })
  return esbuild
    .build({
      entryPoints: files,
      write: true,
      outdir: 'dist',
      sourcemap: true,
      outExtension: { '.js': '.mjs' },
    })
    .catch((e) => {
      console.log('build faild')
    })
}

build()
