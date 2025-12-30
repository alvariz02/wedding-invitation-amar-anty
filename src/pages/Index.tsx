import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  OpeningModal,
  FloatingNav,
  HeroSection,
  QuoteSection,
  CoupleSection,
  EventSection,
  InvitedGuestsSection,
  GallerySection,
  GiftSection,
  RSVPSection,
  MusicPlayer,
  ParallaxElements,
  FallingPetals,
  ScrollGradient,
} from "@/components/wedding";
import { WEDDING_CONFIG } from "@/lib/constants";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  
  // Get guest name from URL for personalization
  const guestName = 
    searchParams.get("to") || 
    searchParams.get("nama") || 
    searchParams.get("name") || 
    searchParams.get("guest") || 
    null;

  const handleOpenInvitation = () => {
    setIsModalOpen(false);
    // Dispatch event for music player
    window.dispatchEvent(new CustomEvent("invitationOpened"));
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "couple", "event", "gallery", "rsvp"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Husain & Anti Wedding | {WEDDING_CONFIG.event.displayDate}</title>
        <meta
          name="description"
          content={`Kami mengundang Anda untuk merayakan pernikahan ${WEDDING_CONFIG.couple.groom.name} & ${WEDDING_CONFIG.couple.bride.name} pada ${WEDDING_CONFIG.event.displayDate} di Desa pangeo/liate, Kec. Morotai Jaya, Kab. Pulau Morotai`}
        />
        <meta
          name="keywords"
          content="undangan pernikahan, wedding invitation, Husain Ishak, Januanti M. Siri, pernikahan, wedding, Morotai, akad nikah, resepsi"
        />
        <meta name="author" content="Husain & Anti" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#d4a574" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Husain & Anti Wedding | ${WEDDING_CONFIG.event.displayDate}`} />
        <meta
          property="og:description"
          content={`Kami mengundang Anda untuk merayakan pernikahan ${WEDDING_CONFIG.couple.groom.name} & ${WEDDING_CONFIG.couple.bride.name} pada ${WEDDING_CONFIG.event.displayDate}`}
        />
        <meta property="og:image" content="/assets/4.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Husain & Anti Wedding" />
        <meta property="og:site_name" content="Husain & Anti Wedding" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Husain & Anti Wedding | ${WEDDING_CONFIG.event.displayDate}`} />
        <meta
          name="twitter:description"
          content={`Kami mengundang Anda untuk merayakan pernikahan ${WEDDING_CONFIG.couple.groom.name} & ${WEDDING_CONFIG.couple.bride.name} pada ${WEDDING_CONFIG.event.displayDate}`}
        />
        <meta name="twitter:image" content="/assets/4.jpg" />
        <meta name="twitter:image:alt" content="Husain & Anti Wedding" />
        
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/src/assets/4.jpg" />
        <link rel="apple-touch-icon" href="/src/assets/4.jpg" />
      </Helmet>

      <div className="min-h-screen bg-background relative">
        {/* Scroll-based gradient transitions */}
        <ScrollGradient />
        {/* Parallax Background Elements */}
        <ParallaxElements />
        <FallingPetals />

        {/* Opening Modal */}
        <OpeningModal isOpen={isModalOpen} onOpen={handleOpenInvitation} />

        {/* Music Player */}
        <MusicPlayer />

        {/* Floating Navigation */}
        {!isModalOpen && (
          <FloatingNav activeSection={activeSection} onNavigate={handleNavigate} />
        )}

        {/* Main Content - Mobile First Container */}
        <main className="mx-auto max-w-md lg:max-w-lg">
          <HeroSection />
          <QuoteSection />
          <CoupleSection />
          <EventSection />
          <InvitedGuestsSection />
          <GallerySection />
          <GiftSection />
          <RSVPSection />

          {/* Footer */}
          <footer className="pb-28 text-center">
            <p className="font-heading text-lg text-muted-foreground">
              {guestName ? `Terima kasih ${guestName} telah menjadi bagian dari hari spesial kami` : "Thank you for being part of our special day"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground/70">
              {WEDDING_CONFIG.couple.groom.name} & {WEDDING_CONFIG.couple.bride.name}
            </p>
            <p className="mt-4 text-xs text-muted-foreground/50">
              Made with Alparis.dev
            </p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Index;