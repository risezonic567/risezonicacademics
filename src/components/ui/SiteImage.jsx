import Image from "next/image";

export function SiteImage({
  image,
  className = "",
  sizes = "100vw",
  priority = false,
  fill = false,
}) {
  return (
    <span
      style={{
        display: "block",
        width: "100%",
        aspectRatio: `${image.width} / ${image.height}`,
        position: "relative",
        ...(fill ? { height: "100%" } : {}),
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={fill ? undefined : image.width}
        height={fill ? undefined : image.height}
        fill={fill}
        className={className}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        unoptimized={image.src.endsWith(".svg")}
        style={fill ? undefined : { width: "100%", height: "100%" }}
      />
    </span>
  );
}
