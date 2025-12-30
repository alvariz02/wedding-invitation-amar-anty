// Wedding Invitation Constants
// Edit this file to customize all content without touching component logic

export const WEDDING_CONFIG = {
  // Couple Information
  couple: {
    groom: {
      name: "Husain",
      fullName: "Husain Ishak. S.Ap",
      parents: "Putra Pertama Alm Bpk. Marikar Ishak & ibu. Nisa Boke",
      instagram: "https://instagram.com/husain",
      photo: "/soloman.jpg", // Replace with actual photo
    },
    bride: {
      name: "Anti",
      fullName: "Januanti M. Siri S.Pd", 
      parents: "Putri kelima dari Alm Bpk. Edi M. Siri & Ibu. Maryam Puni",
      instagram: "https://instagram.com/januanti",
      photo: "/solowoman.jpg", // Replace with actual photo
    },
  },

  // Wedding Date & Time
  event: {
    weddingDate: new Date("2026-01-06T08:00:00"),
    displayDate: "Tuesday, 06 January 2026",
    akad: {
      title: "Akad Nikah",
      time: "08:00 WIT s/d Selesai",
      date: "Tuesday, 06 January 2026",
      location: "kediaman mempelai wanita Desa pangeo/liate kec.Morotai Jaya kab.pulau Morotai",
    },
    resepsi: {
      title: "Wedding Reception",
      time: "11:00 WIT s/d Selesai",
      date: "Tuesday, 06 January 2026",
      location: "Desa pangeo/liate kec.Morotai Jaya kab.pulau Morotai",
    },
    venue: {
      name: "Desa pangeo/liate",
      address: "kec.Morotai Jaya kab.pulau Morotai",
      mapsUrl: "https://maps.google.com/?q=Desa+pangeo+liate+Morotai+Jaya",
    },
  },

  // Religious Quote
  quote: {
    text: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
    source: "Q.S. Ar-Rum: 21",
  },

  // Invited Guests
  invitedGuests: {
    bride: [
      "Yules Puni",
      "Kel. Besar M. siri",
      "Kel. Besar Puni",
      "Kel. Besar Martora",
    ],
    groom: [
      "Hj. Jamalia Dano kader",
      "Kel. Besar Ishak",
      "Kel. Besar Boke",
      "Kel. Besar Dano Kader",
      "Kel. Soleman",
      "kel, Besar Seng",
    ],
  },

  // Gallery Photos
  gallery: [
    { id: 1, src: "/1.jpg", alt: "Couple photo 1" },
    { id: 2, src: "/2.jpg", alt: "Couple photo 2" },
    { id: 3, src: "/3.jpg", alt: "Couple photo 3" },
    { id: 4, src: "/4.jpg", alt: "Couple photo 4" },
    { id: 5, src: "/5.jpg", alt: "Couple photo 5" },
    { id: 6, src: "/6.jpg", alt: "Couple photo 6" },
  ],

  // Wedding Gift / Angpao
  giftAccounts: [
    {
      bank: "BRI",
      accountNumber: "1114-0104-4313-50-4",
      accountName: "HUSAIN ISHAK",
      logo: "💳",
    },
    {
      bank: "BRI",
      accountNumber: "5223-0101-9593-53-2",
      accountName: "januanti M.Siri",
      logo: "💳",
    },
  ],

  // Social Media & Contact
  social: {
    instagram: "https://instagram.com/husain.januanti",
    hashtag: "#HusainJanuanti2026",
  },

  // Background Music
  music: {
    src: "/Tiara Andini, Arsy Widianto - Lagu Pernikahan Kita [ZeFpigRaXbI].mp3",
    title: "Lagu Pernikahan Kita - Tiara Andini & Arsy Widianto",
  },

  // Navigation Items
  navigation: [
    { id: "home", label: "Home", icon: "home" },
    { id: "couple", label: "Couple", icon: "heart" },
    { id: "event", label: "Event", icon: "calendar" },
    { id: "gallery", label: "Gallery", icon: "image" },
    { id: "rsvp", label: "RSVP", icon: "mail" },
  ],
};

// Initial mock wishes for RSVP
export const INITIAL_WISHES = [
  
];

export type Wish = {
  id: string;
  name: string;
  message: string;
  attendance: "attending" | "not_attending" | "maybe";
  createdAt: Date;
};