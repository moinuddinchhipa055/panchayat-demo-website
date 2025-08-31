import SectionTitle from './SectionTitle'
import site from '../data/site.json'

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="About" title={`About ${site.panchayat.name}`} sub="सशक्त ग्राम, सशक्त भारत — Strong villages build a stronger nation." />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card p-6 leading-relaxed text-slate-700 whitespace-pre-line">
            {site.panchayat.about}
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Contact</h3>
            <p className="text-sm text-slate-700">
              <span className="font-medium">Address:</span><br/>{site.contact.address}
            </p>
            <p className="text-sm text-slate-700 mt-3">
              <span className="font-medium">Phone:</span> {site.contact.phone}
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-medium">Email:</span> {site.contact.email}
            </p>
            <div className="mt-4 flex gap-2">
              <a className="badge" href={site.social.facebook} target="_blank">Facebook</a>
              <a className="badge" href={site.social.instagram} target="_blank">Instagram</a>
              <a className="badge" href={site.social.twitter} target="_blank">X</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
