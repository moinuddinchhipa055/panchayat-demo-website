import { useState } from 'react'
import SectionTitle from './SectionTitle'
import site from '../data/site.json'
import Lightbox from './Lightbox'

export default function Gallery(){
  const [open, setOpen] = useState(null)
  return (
    <section id="gallery" className="section bg-slate-50">
      <div className="container">
        <SectionTitle eyebrow="Gallery" title="Photo Gallery" sub="Snapshots from community life and development works." />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {site.gallery.map((g, idx)=>(
            <button key={idx} onClick={()=>setOpen(g.src)} className="group relative card overflow-hidden">
              <img loading="lazy" src={g.src} alt={g.alt} className="w-full h-56 object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm">{g.caption}</div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox src={open} alt="" onClose={()=>setOpen(null)} />
    </section>
  )
}
