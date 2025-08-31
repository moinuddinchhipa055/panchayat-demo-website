export default function Hero(){
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-white"></div>
      <div className="container grid md:grid-cols-2 gap-8 items-center pt-12 md:pt-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Gram Panchayat <span className="text-brand-700">Devnagar</span>
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            Empowering local governance with transparency, inclusion and digital services for every citizen of Devnagar.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#news" className="btn btn-primary">Latest News</a>
            <a href="#gallery" className="btn border-slate-200 hover:border-brand-300">View Gallery</a>
          </div>
          <ul className="mt-6 grid grid-cols-3 gap-4 text-sm text-slate-700">
            <li className="card p-4 text-center"><span className="font-bold text-2xl">12</span><p>Schemes</p></li>
            <li className="card p-4 text-center"><span className="font-bold text-2xl">8</span><p>Wards</p></li>
            <li className="card p-4 text-center"><span className="font-bold text-2xl">5k+</span><p>Residents</p></li>
          </ul>
        </div>
        <div className="relative">
          <img src="/images/hero.jpg" alt="Devnagar" className="rounded-3xl shadow-md border border-slate-200" />
        </div>
      </div>
    </section>
  )
}
