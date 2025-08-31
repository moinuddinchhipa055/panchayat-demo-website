import { useEffect } from 'react'
export default function Lightbox({src, alt, onClose}){
  useEffect(()=>{
    const onKey=(e)=>{ if(e.key==='Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[onClose])

  if(!src) return null
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <img src={src} alt={alt} className="max-h-full max-w-full rounded-2xl shadow-lg border" />
    </div>
  )
}
