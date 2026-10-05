import Image from "next/image";
import Link from "next/link";
import { artworks } from "../../data/artworks";

export default function Work(){return <main><section className="archive"><p className="eyebrow">THE ARCHIVE</p><h1 className="section-title">The Work</h1><p className="archive-intro">A growing visual archive of public murals, large-scale work and process documentation.</p><div className="archive-grid">{artworks.map((a,i)=><Link className="archive-card" href={`/artwork/${a.slug}`} key={a.id}><div className="archive-image"><Image src={a.image} alt={a.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="meta"><span>0{i+1}</span><div><b>{a.title}</b><br/>{a.medium}<br/><small>{a.category}</small></div></div></Link>)}</div></section></main>}
