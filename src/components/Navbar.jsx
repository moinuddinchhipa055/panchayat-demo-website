export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
      <nav className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10 rounded-xl border" />
          <div className="leading-tight">
            <p className="font-bold text-slate-900">Gram Panchayat</p>
            <p className="text-brand-700 font-semibold -mt-1">Devnagar</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#gallery">Gallery</a>
          <a className="nav-link" href="#news">News</a>
          <a className="nav-link" href="#members">Members</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn btn-primary">Contact</a>
      </nav>
    </header>
  )
}
