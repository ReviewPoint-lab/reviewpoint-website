import Link from "next/link";
import { companies, categories } from "@/lib/demo";

export default function Home() {
  return <>
    <section className="hero"><div className="wrap hero-inner">
      <div className="eyebrow">A clearer view of customer experience</div>
      <h1>Real experiences.<br/>Better decisions.</h1>
      <p>Discover businesses through customer feedback. Share your experience and help others make more informed choices.</p>
      <form action="/companies" className="search"><input name="q" placeholder="Search for a company or service..." aria-label="Search companies"/><button className="btn btn-primary">Find a company</button></form>
      <div className="trustline">Explore businesses · Read customer experiences · Share your own review</div>
    </div></section>
    <section className="section"><div className="wrap">
      <div className="section-head"><div><h2>Explore popular companies</h2><p className="sub">Discover company profiles and customer feedback.</p></div><Link className="link" href="/companies">View all companies →</Link></div>
      <div className="grid">{companies.slice(0,3).map(c=><Link className="card" href={`/companies/${c.id}`} key={c.id}>
        <div className="company-top"><div className="company-logo">{c.initials}</div><div><div className="company-name">{c.name}</div><div className="category">{c.category}</div></div></div>
        <div className="rating-row"><span className="stars">★★★★★</span><span className="score">{c.rating.toFixed(1)}</span><span className="review-count">{c.count.toLocaleString()} sample reviews</span></div>
        <p className="card-note">{c.description}</p>
      </Link>)}</div>
      <p className="muted" style={{fontSize:12,marginTop:14}}>Demo notice: these companies, ratings and review counts are illustrative sample data, not real endorsements or customer reviews.</p>
    </div></section>
    <section className="section section-soft"><div className="wrap">
      <div className="section-head"><div><h2>Browse by category</h2><p className="sub">Find businesses across the services you use every day.</p></div><Link className="link" href="/categories">All categories →</Link></div>
      <div className="categories">{categories.map((c,i)=><Link href={`/companies?q=${encodeURIComponent(c)}`} className="category-card" key={c}><span className="category-icon">{["✈","▣","€","▤","⌂","⌘","◇","⚡"][i]}</span>{c}</Link>)}</div>
    </div></section>
    <section className="section"><div className="wrap"><div className="section-head"><div><h2>How ReviewPoint works</h2><p className="sub">A transparent place for customers and businesses to connect.</p></div></div>
      <div className="how"><div className="how-card"><span className="num">01 / DISCOVER</span><h3>Find a business</h3><p>Search company profiles and explore customer experiences before making a decision.</p></div><div className="how-card"><span className="num">02 / SHARE</span><h3>Write an honest review</h3><p>Create an account, describe your genuine experience and give a star rating.</p></div><div className="how-card"><span className="num">03 / RESPOND</span><h3>Businesses engage</h3><p>Businesses can claim a profile, respond to feedback and manage their presence.</p></div></div>
    </div></section>
    <section className="section section-soft"><div className="wrap" style={{textAlign:"center"}}><h2>Had an experience worth sharing?</h2><p className="sub" style={{marginBottom:20}}>Help others make better-informed decisions.</p><Link className="btn btn-primary" href="/signup">Create your free account</Link></div></section>
  </>;
}