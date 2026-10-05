"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export default function LightboxImage({ src, alt, sizes = "100vw", priority = false, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={`lightbox-trigger ${className}`} onClick={() => setOpen(true)} aria-label={`View ${alt} full screen`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        <span className="zoom-hint">VIEW FULL ↗</span>
      </button>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button type="button" className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close full screen image">CLOSE ×</button>
          <div className="lightbox-image" onClick={(e) => e.stopPropagation()}>
            <Image src={src} alt={alt} fill sizes="100vw" priority />
          </div>
        </div>
      )}
    </>
  );
}
