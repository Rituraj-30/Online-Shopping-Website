import { useEffect, useState } from "react";

const Img = () => {
  // 🖼️ Array of image URLs
  const images = [
    "/ipl.png",
    "/women.webp",
   
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-xl shadow-md border border-gray-200 bg-black flex items-center justify-center">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Trending in India"
          className={`absolute  transition-opacity duration-1000 ease-in-out
            ${index === currentImage ? "opacity-100" : "opacity-0"}
            max-w-full max-h-full object-contain`}
        />
      ))}
    </div>
  );
};

export default Img;
