import Image from "next/image";
import LightboxImage from "../../components/LightboxImage";
import {notFound} from "next/navigation";
import Link from "next/link";
import {artworks} from "../../../data/artworks";

export default async function Artwork({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=artworks.find(x=>x.slug===slug);if(!a)notFound();return <main className="detail"><Link className="back" href="/work">← BACK TO ARCHIVE</Link><div className="detail-art"><LightboxImage src={a.image} alt={a.title} sizes="(max-width: 900px) 100vw, 88vw" priority className="art-image-full" /></div><div className="detail-info"><p className="eyebrow">{a.category} · {a.series}</p><h1 className="section-title">{a.title}</h1><p className="detail-description">{a.description}</p><div className="metadata"><div><span>MEDIUM</span><strong>{a.medium}</strong></div><div><span>STATUS</span><strong>{a.status}</strong></div></div></div></main>}
