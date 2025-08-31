import site from '../data/site.json'
export default function Footer(){
  return (
    <footer className="mt-10 border-t border-slate-200">
      <div className="container py-8 flex flex-col md:flex-row items-center gap-4 justify-between text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" className="w-8 h-8 rounded-lg border" />
          <span>© {new Date().getFullYear()} Gram Panchayat {site.panchayat.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <a href={site.social.facebook} className="hover:underline">Facebook</a>
          <a href={site.social.instagram} className="hover:underline">Instagram</a>
          <a href={site.social.twitter} className="hover:underline">X</a>
        </div>
      </div>
    </footer>
  )
}
