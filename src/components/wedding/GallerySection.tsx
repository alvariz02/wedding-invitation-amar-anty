import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

// Use path strings instead of imports for better code splitting
const galleryImages = [
  { id: 1, src: "/1.jpg", alt: "Couple photo 1" },
  { id: 2, src: "/2.jpg", alt: "Couple photo 2" },
  { id: 3, src: "/3.jpg", alt: "Couple photo 3" },
  { id: 4, src: "/4.jpg", alt: "Couple photo 4" },
  { id: 5, src: "/5.jpg", alt: "Couple photo 5" },
  { id: 6, src: "/6.jpg", alt: "Couple photo 6" },
  { id: 7, src: "/7.jpg", alt: "Couple photo 7" },
  { id: 8, src: "/8.jpg", alt: "Couple photo 8" },
  { id: 9, src: "/9.jpg", alt: "Couple photo 9" },
  { id: 10, src: "/10.jpg", alt: "Couple photo 10" },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentIndex = selectedImage !== null 
    ? galleryImages.findIndex(img => img.id === selectedImage) 
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(galleryImages[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIndex + 1].id);
    }
  };

  return (
    <>
      <SectionReveal variant="slideUp">
        <section id="gallery" className="py-20 px-4">
          <div className="mx-auto max-w-lg">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <span className="font-body text-sm tracking-[0.3em] text-accent">
                OUR MOMENTS
              </span>
              <h2 className="mt-2 font-heading text-3xl text-foreground">
                Photo Gallery
              </h2>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
              </div>
            </motion.div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-lg shadow-lg ${
                    index === 0 || index === 3 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
                    onClick={() => setSelectedImage(image.id)}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-card transition-colors hover:bg-card/40"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-card transition-colors hover:bg-card/40"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {currentIndex < galleryImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-card transition-colors hover:bg-card/40"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt="Gallery"
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card/20 px-4 py-2 text-sm text-card">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
