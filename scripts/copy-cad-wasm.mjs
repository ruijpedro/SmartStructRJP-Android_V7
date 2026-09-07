import {mkdir,copyFile,access} from 'node:fs/promises'
import {resolve} from 'node:path'
const src=resolve('node_modules/@mlightcad/libredwg-web/wasm')
const dst=resolve('public/cad-wasm')
await mkdir(dst,{recursive:true})
for(const f of ['libredwg.wasm','libredwg-web.js']){try{await access(resolve(src,f));await copyFile(resolve(src,f),resolve(dst,f))}catch(e){console.warn('[RJP CAD] asset não copiado:',f)}}
