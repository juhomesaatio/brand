import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['./src/main.jsx'],
  bundle: true,
  outfile: 'public/bundle.js',
})
await ctx.watch()