import glob from 'glob'
import esbuild from 'esbuild'

function findTs() {
  return new Promise((resolve, reject) => {
    glob('solve/**/*.ts', {}, function (er, files) {
      if (er) reject(error)
      resolve(files)
    })
  })
}

function buildTs(files) {
  esbuild.build({
    entryPoints: files.filter((v) => !v.includes('test')),
    write: true,
    outdir: 'dist',
    sourcemap: true,
    outExtension: { '.js': '.mjs' },
  })
}

findTs()
  .then((v) => {
    buildTs(v)
  })
  .catch((e) => {
    console.log('build faild')
  })
