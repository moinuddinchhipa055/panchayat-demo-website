import SectionTitle from './SectionTitle'
import site from '../data/site.json'

function NewsCard({post}){
  const d = new Date(post.date)
  const date = d.toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric'})
  return (
    <article className="card p-6 flex flex-col">
      <div className="text-xs text-slate-500">{date}</div>
      <h3 className="mt-1 font-semibold text-slate-900">{post.title}</h3>
      <p className="mt-2 text-slate-700">{post.excerpt}</p>
      {post.link && <a className="mt-3 text-brand-700 font-medium hover:underline" href={post.link} target="_blank">Read more →</a>}
    </article>
  )
}

export default function News(){
  return (
    <section id="news" className="section">
      <div className="container">
        <SectionTitle eyebrow="Updates" title="News & Notices" sub="Recent announcements and development updates from the Panchayat."/>
        <div className="grid md:grid-cols-2 gap-6">
          {site.news.map(post => <NewsCard key={post.id} post={post}/>)}
        </div>
      </div>
    </section>
  )
}
