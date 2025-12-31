import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Music2 } from "lucide-react";

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay blocked - that's okay
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const startMusic = () => {
    if (audioRef.current && !hasInteracted) {
      audioRef.current.currentTime = 49; // Start from 49 seconds
      audioRef.current.play().catch(() => {
        // Autoplay blocked
      });
      setIsPlaying(true);
      setHasInteracted(true);
    }
  };

  useEffect(() => {
    // Listen for the opening modal to close
    const handleInvitationOpen = () => {
      startMusic();
    };

    window.addEventListener("invitationOpened", handleInvitationOpen);
    return () => {
      window.removeEventListener("invitationOpened", handleInvitationOpen);
    };
  }, [hasInteracted]);

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        src="/Tiara Andini, Arsy Widianto - Lagu Pernikahan Kita [ZeFpigRaXbI].mp3#t=49"
      />

      {/* Floating Music Button */}
      <AnimatePresence>
        {hasInteracted && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="fixed right-4 top-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border shadow-lg"
          >
            {isPlaying ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Music className="h-5 w-5 text-primary" />
              </motion.div>
            ) : (
              <Music2 className="h-5 w-5 text-muted-foreground" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};