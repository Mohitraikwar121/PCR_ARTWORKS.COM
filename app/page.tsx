import Image from "next/image";
import LightboxImage from "./components/LightboxImage";
import Link from "next/link";
import { artworks } from "../data/artworks";
import { artist } from "../data/artist";

export default function Home() {
  const featured = artworks.filter(a => a.featured).sort((a,b) => (a.priority ?? 99) - (b.priority ?? 99));
  return <>
    <main>
      <section className="hero">
        <Image src="/images/artist-river.png" alt={`${artist.name} outdoors`} fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-inner">
          <p className="eyebrow light">{artist.disciplines.join(" · ").toUpperCase()}</p>
          <h1>{artist.name}</h1>
          <p className="hero-tagline">{artist.tagline}</p>
          <p className="location">{artist.location}</p>
          <Link className="hero-cta" href="/work">ENTER THE WORK <span>↘</span></Link>
        </div>
      </section>

      <section className="manifesto">
        <div><p className="eyebrow">THE PRACTICE</p><p className="statement-small">Painting, drawing and large-scale visual work shaped by observation, patience and expression.</p></div>
        <p className="manifesto-copy">From intimate portraits to public murals and monumental work, the practice moves between scale, subject and setting while keeping the hand of the artist visible.</p>
      </section>

      <section className="signature-work">
        <div className="section-head"><p className="eyebrow">SIGNATURE WORK · 01</p><h2 className="section-title">The work, in the making.</h2></div>
        <div className="prime-art-frame">
          <div className="feature-image portrait-feature">
            <LightboxImage src="/images/mural-johnny-johnny.png" alt="Artist painting the Johnny Johnny mural" sizes="(max-width: 700px) 100vw, 82vw" priority className="art-image-full" />
            <Link href="/artwork/johnny-johnny-mural" className="image-caption">Johnny Johnny Mural · PUBLIC MURAL PROJECT ↗</Link>
          </div>
        </div>
      </section>

      <section className="featured-grid-section">
        <div className="section-head split"><div><p className="eyebrow">SELECTED PROJECTS</p><h2 className="section-title">Scale becomes part of the story.</h2></div><Link className="text-link" href="/work">VIEW ALL WORK →</Link></div>
        <div className="featured-grid">
          {featured.map((a, i) => <article className={`feature-card card-${i}`} key={a.id}>
            <div className="feature-card-image"><LightboxImage src={a.image} alt={a.title} sizes="(max-width: 700px) 100vw, 50vw" className="art-image-full" /></div>
            <Link href={`/artwork/${a.slug}`} className="feature-meta"><span>0{i+1}</span><div><h3>{a.title}</h3><p>{a.medium} · {a.category} ↗</p></div></Link>
          </article>)}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-images">
          <div className="about-main"><Image src="/images/artist-portrait.png" alt={`${artist.name} portrait`} fill sizes="(max-width: 700px) 90vw, 42vw" /></div>
          <div className="about-secondary"><Image src="/images/artist-editorial.png" alt={`${artist.name} seated outdoors`} fill sizes="(max-width: 700px) 70vw, 30vw" /></div>
        </div>
        <div className="about-copy"><p className="eyebrow">THE ARTIST</p><h2 className="section-title">MR. POONAM<br/>CHAND RAIKWAR</h2><p className="lead">{artist.shortBio}</p><p className="body-copy">{artist.bio}</p><div className="info-grid"><div><span>BASED IN</span><strong>{artist.location}</strong></div><div><span>INSPIRED BY</span><strong>{artist.inspiration}</strong></div><div><span>PRACTICE</span><strong>Painting · Sketching · Portraits · Cartoons</strong></div><div><span>COMMISSIONS</span><strong>Available</strong></div></div></div>
      </section>

      <section className="practice-section">
        <p className="eyebrow">ARTISTIC PRACTICE</p><h2 className="section-title">Observation becomes expression.</h2>
        <div className="practice-columns"><div><h3>FORMS</h3><p>Painting · Sketching · Portraiture · Cartoons · Large-scale mural work</p></div><div><h3>VISIBLE SUBJECTS</h3><p>People · Character · Expression · Everyday surroundings · Narrative imagery</p></div><div><h3>TOOLS & SURFACES</h3><p>Materials and techniques are presented according to the works documented in the archive.</p></div></div>
      </section>

      <section id="contact" className="contact-section artist-statement-section">
        <div className="statement-intro"><p className="eyebrow">ARTIST STATEMENT</p><h2 className="section-title">A practice built from looking closely.</h2></div>
        <div className="canvas-statement-grid">
          <article className="mini-canvas canvas-a"><span>01</span><p>“Art begins with observation.”</p><small>THE STARTING POINT</small></article>
          <article className="mini-canvas canvas-b"><span>02</span><p>“A face, a gesture, a moment.”</p><small>WHAT BECOMES A STORY</small></article>
          <article className="mini-canvas canvas-c"><span>03</span><p>“Inspired by my father.”</p><small>THE FIRST INFLUENCE</small></article>
          <article className="mini-canvas canvas-d"><span>04</span><p>“Learning to see differently.”</p><small>THE ARTIST'S VIEW</small></article>
          <div className="paint-stain stain-one"/><div className="paint-stain stain-two"/>
          <div className="brush-mark brush-one"/><div className="brush-mark brush-two"/>
        </div>
        <details className="statement-full"><summary>READ THE FULL STATEMENT</summary><p>{artist.statement}</p></details>
        <div className="contact-row contact-details"><div><span>COMMISSIONS</span><strong>Available for enquiries</strong></div><div><span>LOCATION</span><strong>{artist.location}</strong></div><div><span>PHONE</span><a href={`tel:${artist.phone.replace(/\s/g, "")}`}>{artist.phone}</a></div><div><span>EMAIL</span><a href={`mailto:${artist.email}`}>{artist.email}</a></div><div><span>WHATSAPP</span><a href={`https://wa.me/${artist.whatsapp}`} target="_blank" rel="noreferrer">CHAT ON WHATSAPP ↗</a></div><div><span>EXHIBITIONS</span><strong>{artist.exhibitions}</strong></div></div>
        <div className="contact-actions"><a className="contact-action" href={`mailto:${artist.email}?subject=Artwork%20Commission%20Enquiry`}>EMAIL THE ARTIST <span>↗</span></a><a className="contact-action" href={`https://wa.me/${artist.whatsapp}?text=Hello%20Mr.%20Poonam%20Chand%20Raikwar%2C%20I%20would%20like%20to%20enquire%20about%20an%20artwork%20commission.`} target="_blank" rel="noreferrer">START A WHATSAPP ENQUIRY <span>↗</span></a></div></section>
    </main>
    <footer><p className="footer-title">LET'S CREATE<br/>SOMETHING TIMELESS.</p><div className="footer-actions"><a className="cta" href={`mailto:${artist.email}?subject=Artwork%20Commission%20Enquiry`}>EMAIL THE ARTIST →</a><a className="cta" href={`tel:${artist.phone.replace(/\s/g, "")}`}>CALL {artist.phone} →</a><a className="cta" href={`https://wa.me/${artist.whatsapp}`} target="_blank" rel="noreferrer">WHATSAPP →</a></div><p className="footer-contact">{artist.email} · {artist.location}</p><p className="copyright">© {new Date().getFullYear()} {artist.name} · All artwork rights reserved.</p></footer>
  </>;
}
