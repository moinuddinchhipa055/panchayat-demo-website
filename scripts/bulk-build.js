// Usage: node scripts/bulk-build.js data/sample.csv
// For each row, clone the template, generate site.json, and build to /dist-sites/<name>
import fs from 'fs'
import { execSync } from 'child_process'
import path from 'path'

const [,, csvPath] = process.argv
if(!csvPath){ console.error('Provide CSV path'); process.exit(1) }

const text = fs.readFileSync(csvPath, 'utf-8').trim()
const [header, ...rows] = text.split(/\r?\n/)
const cols = header.split(',').map(h=>h.trim())
function rowToObj(line){
  const vals = line.split(',').map(v=>v.trim())
  const o = {}; cols.forEach((c,i)=>o[c]=vals[i]||'')
  return o
}
const data = rows.map(rowToObj)

for(const row of data){
  fs.writeFileSync('src/data/site.json', JSON.stringify({
    panchayat: { name: row.name, about: row.about||'' },
    gallery: [
      {src:'/images/gallery-1.jpg', alt:'Photo 1', caption:'Photo 1'},
      {src:'/images/gallery-2.jpg', alt:'Photo 2', caption:'Photo 2'},
      {src:'/images/gallery-3.jpg', alt:'Photo 3', caption:'Photo 3'}
    ],
    news: [
      {id:'n1', title:'Notice 1', date:new Date().toISOString().slice(0,10), excerpt:'Short update 1', link:''},
      {id:'n2', title:'Notice 2', date:new Date().toISOString().slice(0,10), excerpt:'Short update 2', link:''}
    ],
    members: (row.members||'').split('|').filter(Boolean).map((name,i)=>({id:'m'+(i+1), name, role:i===0?'Sarpanch':'Member'})),
    contact: {
      address: row.address||'',
      phone: row.phone||'',
      email: row.email||'',
      hours: 'Mon–Sat, 10:00 AM – 5:00 PM',
      map: 'https://www.google.com/maps?q='+encodeURIComponent(row.address||'')+'&output=embed'
    },
    social: { facebook: row.facebook||'', instagram: row.instagram||'', twitter: row.twitter||'' }
  }, null, 2))
  console.log('Prepared site.json for', row.name)
  execSync('npm run build', { stdio:'inherit' })
  const outDir = path.resolve('dist-sites', row.name.replace(/\s+/g,'-').toLowerCase())
  fs.mkdirSync(outDir, { recursive: true })
  // copy dist -> dist-sites/name
  execSync(`node -e "fs.cpSync('dist', '${outDir}', { recursive:true })"`)
  console.log('Built site for', row.name, 'at', outDir)
}
console.log('All sites built.')
