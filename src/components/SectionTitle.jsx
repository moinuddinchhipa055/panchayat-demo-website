export default function SectionTitle({eyebrow, title, sub}) {
  return (
    <div className="text-center mb-10">
      {eyebrow && <div className="badge mb-3">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      {sub && <p className="text-slate-600 mt-3 max-w-2xl mx-auto">{sub}</p>}
    </div>
  )
}
