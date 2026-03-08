/** Shared full-bleed background image with configurable gradient overlay */
export function MfPhotoBackground({
  image,
  gradient = "linear-gradient(to bottom, rgba(11,12,16,0.45) 0%, rgba(11,12,16,0.7) 40%, rgba(11,12,16,0.92) 70%, rgba(11,12,16,0.98) 100%)",
  objectPosition = "center 20%",
}: {
  image: string;
  gradient?: string;
  objectPosition?: string;
}) {
  return (
    <>
      <img
        src={image}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
        }}
      />
    </>
  );
}
