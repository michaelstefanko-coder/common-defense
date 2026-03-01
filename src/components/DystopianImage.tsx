/* eslint-disable @next/next/no-img-element */

interface DystopianImageProps {
  src: string;
  alt: string;
  caption?: string;
  classification?: string;
  timestamp?: string;
  overlay?: "dark" | "blood" | "none";
}

export default function DystopianImage({
  src,
  alt,
  caption,
  classification = "CLASSIFIED",
  timestamp,
  overlay = "dark",
}: DystopianImageProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ borderTop: "2px solid #cc0000", borderBottom: "2px solid #cc0000" }}>
      {/* Image container — full bleed, fixed height */}
      <div className="relative w-full" style={{ height: "70vh", minHeight: "500px", maxHeight: "800px" }}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "grayscale(60%) contrast(1.2) brightness(0.85)",
          }}
          loading="lazy"
        />

        {/* Overlay gradient */}
        {overlay === "dark" && (
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.8) 100%)",
            }}
          />
        )}
        {overlay === "blood" && (
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(204,0,0,0.15) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        )}

        {/* Scanline effect on the image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }}
        />

        {/* Top-left classification stamp */}
        <div className="absolute top-6 left-8 z-10">
          <div
            className="font-mono text-[10px] tracking-[3px] uppercase px-3 py-1"
            style={{
              border: "1px solid rgba(204,0,0,0.6)",
              color: "rgba(204,0,0,0.8)",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            {classification}
          </div>
        </div>

        {/* Top-right timestamp */}
        {timestamp && (
          <div className="absolute top-6 right-8 z-10">
            <div
              className="font-mono text-[10px] tracking-[2px]"
              style={{ color: "rgba(136,136,136,0.7)" }}
            >
              {timestamp}
            </div>
          </div>
        )}

        {/* Bottom caption bar */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 z-10 px-8 py-5" style={{ backgroundColor: "rgba(0,0,0,0.85)" }}>
            <div className="max-w-[1200px] mx-auto flex items-center gap-4">
              <div
                className="w-[3px] self-stretch flex-shrink-0"
                style={{ backgroundColor: "#cc0000" }}
              />
              <p
                className="font-mono text-[12px] tracking-[1px] leading-[1.6] uppercase"
                style={{ color: "rgba(208,208,208,0.9)" }}
              >
                {caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
