'use client';
interface TypeImage {
  images: string[];
}
export default function FloatingImages({ images } : TypeImage) {
  return (
    <div
      className="flex justify-center space-x-6 absolute top-[650px] left-1/2 -translate-x-1/2"
      style={{ height: 170 }}
    >
      {images.map((imgName, index) => (
        <div
          key={index}
          className="rounded-full transition-transform duration-300 hover:scale-125  cursor-pointer"
          style={{
            width: 150,
            height: 150,
            transform: index % 2 === 0 ? 'translateY(-40px)' : 'translateY(40px)',
          }}
        >
          <img
            src={`/${imgName}`}
            alt={imgName}
            className="rounded-full object-cover w-full h-full  border-3 border-white"
          />
        </div>
      ))}
    </div>
  );
}
