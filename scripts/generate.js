// Usage: node scripts/generate.js data/sample.csv Devnagar
// Generates src/data/site.json from a CSV row (name, address, phone, email, facebook, instagram, twitter)
import fs from 'fs'
import path from 'path'
const [,, csvPath, nameFilter] = process.argv
if(!csvPath){ console.error('Provide CSV path'); process.exit(1) }

const text = fs.readFileSync(csvPath, 'utf-8').trim()
const [header, ...rows] = text.split(/\r?\n/)
const cols = header.split(',').map(h=>h.trim())

function rowToObj(line){
  const vals = line.split(',').map(v=>v.trim())
  const o = {}
  cols.forEach((c,i)=>o[c]=vals[i]||'')
  return o
}

const data = rows.map(rowToObj)
const row = nameFilter ? data.find(r => r.name.toLowerCase()===nameFilter.toLowerCase()) : data[0]
if(!row){ console.error('No matching row'); process.exit(1) }

const out = {
  panchayat: { name: row.name, about: row.about || 'About text goes here.' },
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
  social: {
    facebook: row.facebook||'',
    instagram: row.instagram||'',
    twitter: row.twitter||''
  }
}

fs.writeFileSync(path.resolve('src/data/site.json'), JSON.stringify(out, null, 2))
console.log('Generated src/data/site.json for', row.name)
