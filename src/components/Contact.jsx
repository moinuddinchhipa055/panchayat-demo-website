import SectionTitle from './SectionTitle'
import site from '../data/site.json'

export default function Contact(){
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle eyebrow="Contact" title="Get in touch" sub="Reach out for certificates, grievances, or information requests."/>
        <div className="grid md:grid-cols-2 gap-6">
          <form className="card p-6 grid gap-3" onSubmit={e=>e.preventDefault()}>
            <input className="border rounded-xl px-4 py-2" placeholder="Your Name" required />
            <input className="border rounded-xl px-4 py-2" type="email" placeholder="Email" required />
            <input className="border rounded-xl px-4 py-2" placeholder="Phone" />
            <textarea className="border rounded-xl px-4 py-2 min-h-[120px]" placeholder="Your Message"></textarea>
            <button className="btn btn-primary w-max">Send Message</button>
            <p className="text-xs text-slate-500">Demo only — form not connected.</p>
          </form>
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Office Address</h3>
            <p className="text-slate-700">{site.contact.address}</p>
            <div className="mt-4 text-sm text-slate-700 space-y-1">
              <p><span className="font-medium">Phone:</span> {site.contact.phone}</p>
              <p><span className="font-medium">Email:</span> {site.contact.email}</p>
              <p><span className="font-medium">Office Hours:</span> {site.contact.hours}</p>
            </div>
            <iframe title="map" className="mt-4 rounded-xl w-full h-64 border"
              src={site.contact.map}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
