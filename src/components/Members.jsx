import SectionTitle from './SectionTitle'
import site from '../data/site.json'

export default function Members(){
  return (
    <section id="members" className="section bg-slate-50">
      <div className="container">
        <SectionTitle eyebrow="Team" title="Panchayat Members" sub="Elected representatives serving Devnagar."/>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {site.members.map(m => (
            <div key={m.id} className="card p-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-brand-100 text-brand-800 font-bold grid place-items-center">
                  {m.name.split(' ').map(w=>w[0]).slice(0,2).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{m.name}</div>
                  <div className="text-sm text-slate-600">{m.role}</div>
                </div>
              </div>
              {m.phone && <div className="text-sm text-slate-700 mt-3"><span className="font-medium">Phone:</span> {m.phone}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
