/* =========================
   CONFIGURATION & DATABASE
========================= */

const CONFIG = {
  // Kategori Produk
  KATEGORI: {
    lifestyle: {
      label: "👗 Lifestyle & Fashion",
      desc: "Fokus: penampilan, percaya diri, tren",
      pain: [
        "udah beli mahal tapi gak pede dipake",
        "salah pilih outfit jadi gak cocok",
        "penampilan gak sesuai ekspektasi",
        "takut dilihat orang karena penampilan",
        "gak tahu style yang cocok untuk diri sendiri"
      ]
    },
    automotive: {
      label: "🚗 Otomotif & Bengkel",
      desc: "Fokus: performa, keamanan, efisiensi",
      pain: [
        "motor sering rusak tiba-tiba",
        "biaya servis makin mahal",
        "kendaraan gak optimal performanya",
        "takut mogok di jalan",
        "spare part berkualitas susah dicari"
      ]
    },
    food: {
      label: "🍕 Makanan & Minuman",
      desc: "Fokus: rasa, kenyang, kesehatan, praktis",
      pain: [
        "diet tapi gagal terus",
        "cepet lapar lagi padahal udah makan",
        "berat badan naik terus tanpa sadar",
        "makan gak healthy tapi praktis",
        "takut nutrisi kurang"
      ]
    },
    beauty: {
      label: "💄 Kecantikan & Skincare",
      desc: "Fokus: hasil, kepercayaan diri, perubahan",
      pain: [
        "udah skincare-an tiap hari tapi jerawat gak hilang",
        "kulit breakout gara-gara salah produk",
        "udah mahal tapi hasilnya gak keliatan",
        "kulit sensitif jadi susah nyari produk",
        "takut jerawat balik lagi"
      ]
    },
    technology: {
      label: "📱 Teknologi & Gadget",
      desc: "Fokus: kemudahan, efisiensi, upgrade hidup",
      pain: [
        "beli gadget tapi cepet lemot",
        "fitur banyak tapi gak kepake",
        "udah mahal tapi performa biasa aja",
        "takut ketinggalan teknologi terbaru",
        "gak tahu gadget mana yang bener"
      ]
    },
    furniture: {
      label: "🛋️ Perabotan & Rumah",
      desc: "Fokus: kenyamanan, estetika, fungsi",
      pain: [
        "rumah berantakan terus",
        "barang cepat rusak",
        "furniture gak pas sama konsep rumah",
        "ruang terasa sempit dan gak nyaman",
        "gak tahu cara atur interior yang bagus"
      ]
    },
    service: {
      label: "🎯 Jasa & Layanan",
      desc: "Fokus: hasil, trust, kredibilitas",
      pain: [
        "udah bayar tapi hasil gak sesuai",
        "pelayanan lama dan ribet",
        "takut tertipu sama provider",
        "hasil tidak sesuai janji",
        "gak ada garansi atau support"
      ]
    }
  },

  // Platform
  PLATFORM: {
    tiktok: {
      label: "📱 TikTok",
      desc: "Konten cepat, hook brutal di 0–3 detik",
      focus: "scroll stopper & emosi tinggi",
      duration: "15-60 detik",
      pacing: "cepat",
      format: "talent-heavy"
    },
    instagram: {
      label: "📷 Instagram",
      desc: "Visual menarik & relatable",
      focus: "aesthetic + storytelling ringan",
      duration: "15-30 detik (Reels)",
      pacing: "medium",
      format: "balanced"
    },
    facebook: {
      label: "👍 Facebook",
      desc: "Lebih informatif & jelas",
      focus: "edukasi + penjelasan benefit",
      duration: "30-60 detik",
      pacing: "medium-slow",
      format: "balanced"
    },
    shopee: {
      label: "🛒 Shopee",
      desc: "Langsung ke jualan",
      focus: "harga, benefit, CTA cepat",
      duration: "10-30 detik",
      pacing: "sangat cepat",
      format: "product-heavy"
    },
    youtube: {
      label: "▶️ YouTube",
      desc: "Storytelling & retention lebih panjang",
      focus: "build cerita & engagement",
      duration: "60-120 detik",
      pacing: "slow-medium",
      format: "talent-heavy"
    }
  },

  // Objective Konten
  OBJECTIVE: {
    hard_conversion: {
      label: "⚡ Jualan Cepat (Hard Conversion)",
      desc: "Fokus langsung ke penjualan & closing cepat",
      cocok: "promo, marketplace, ads",
      tone: "urgent, direct, compelling"
    },
    soft_conversion: {
      label: "🤝 Bangun Kepercayaan (Soft Conversion)",
      desc: "Fokus membangun trust sebelum jualan",
      cocok: "affiliate, produk baru",
      tone: "relatable, trustworthy, educational"
    },
    authority: {
      label: "🏆 Edukasi & Branding (Authority Building)",
      desc: "Fokus membangun kredibilitas jangka panjang",
      cocok: "personal branding, high ticket",
      tone: "expert, authoritative, valuable"
    }
  },

  // Strategi Emosi
  STRATEGIES: ["FEAR", "STORY", "LOGIC", "CURIOSITY", "HARD_SELL"]
};

/* =========================
   EMOTION & HOOK DATABASE
========================= */

const EMOTION_DB = {
  FEAR: {
    name: "Fear (Ketakutan)",
    description: "Menggunakan kekhawatiran/ketakutan audience untuk grab attention",
    baseScore: { ctr: 75, conversion: 65 },
    hooks: [
      "Lo sadar gak, banyak orang baru nyesel setelah kejadian?",
      "Ada satu kesalahan kecil yang bikin semua ini gagal",
      "Jangan sampai ketinggalan sebelum terlambat",
      "Banyak yang rugi karena gak tahu ini",
      "Hati-hati, masalah ini lebih serius dari kelihatannya"
    ],
    problems: [
      (data) => `Masalahnya, kalau ${data.kategori.toLowerCase()} yang salah, akibatnya gak main-main.`,
      (data) => `Banyak yang ngalamin ${data.kategori.toLowerCase()} tapi gak nyesel sampai terlambat.`,
      (data) => `Kesalahan kecil di ${data.kategori.toLowerCase()} bisa bikin efek besar di kemudian hari.`
    ],
    proofs: [
      "Lihat aja, yang punya masalah ini pasti sesal kemudian",
      "Data menunjukkan, 8 dari 10 orang alami hal yang sama",
      "Sudah banyak yang merasakan konsekuensinya"
    ]
  },
  STORY: {
    name: "Story (Cerita)",
    description: "Menceritakan pengalaman relatable yang audience bisa identifikasi",
    baseScore: { ctr: 70, conversion: 75 },
    hooks: [
      (data) => `Gue dulu juga ngalamin hal yang sama, sampai akhirnya...`,
      (data) => `Tau gak sih, cerita gue pernah banget kayak lo?`,
      (data) => `Setahun lalu gue juga pusing soal ini, sampai ketemu solusinya`
    ],
    problems: [
      (data) => `Dulu gue coba banyak cara tapi tetap gak berhasil di ${data.kategori.toLowerCase()}.`,
      (data) => `Setiap hari gue kesel karena ${data.kategori.toLowerCase()} yang gak sesuai ekspektasi.`,
      (data) => `Gue udah habis duit banyak tapi hasil tetap mengecewakan.`
    ],
    proofs: [
      "Sampai akhirnya gue ketemu solusi yang tepat",
      "Dan hasilnya? Gue lega banget sekarang",
      "Banyak temen gue juga alami hal sama dan mereka puas"
    ]
  },
  LOGIC: {
    name: "Logic (Logika)",
    description: "Menjelaskan dengan cara rasional dan sistematis",
    baseScore: { ctr: 65, conversion: 70 },
    hooks: [
      "Dari perspektif logis, ini gimana cara kerjanya?",
      "Secara ilmiah, masalah ini disebabkan oleh 3 faktor",
      "Mari kita breakdown masalahnya dengan logika yang jelas"
    ],
    problems: [
      (data) => `Secara logika, masalah ${data.kategori.toLowerCase()} itu selalu di satu titik yang sama.`,
      (data) => `Jika kita pikir matang, root cause ${data.kategori.toLowerCase()} adalah X, Y, Z.`,
      (data) => `Analisisnya sederhana: masalah dimulai dari sini, terus menjadi besar.`
    ],
    proofs: [
      "Data dan statistik membuktikan ini",
      "Expert di bidang ini sudah memvalidasi",
      "Riset menunjukkan hasil yang konsisten"
    ]
  },
  CURIOSITY: {
    name: "Curiosity (Rasa Penasaran)",
    description: "Membuat audience penasaran dan ingin tahu lebih lanjut",
    baseScore: { ctr: 80, conversion: 60 },
    hooks: [
      "Gue punya satu tips yang 99% orang gak tahu",
      "Ada satu trik simple yang bisa ubah semuanya",
      "Ini rahasia yang orang kaya udah tahu",
      "Penasaran gak gimana caranya? Simak sampai habis"
    ],
    problems: [
      "Tapi tunggu, gak semua orang tau tentang ini",
      "Yang lucu, solusinya ternyata sangat simple",
      "Dan yang bikin menarik adalah..."
    ],
    proofs: [
      "Lihat sendiri gimana reaksi orang yang udah coba",
      "Cerita-cerita mereka pasti bikin lo tertarik",
      "Lo akan kesal kalau gak coba hal ini"
    ]
  },
  HARD_SELL: {
    name: "Hard Sell (Penjualan Langsung)",
    description: "Fokus langsung pada penawaran dengan CTA yang kuat",
    baseScore: { ctr: 85, conversion: 80 },
    hooks: [
      "Ini bukan buat semua orang, cuma yang serius aja",
      "Penawaran terbatas, siapa cepat dia dapat",
      "Stop debat, ambil keputusan sekarang juga",
      "Stok tinggal sedikit, jangan sampai nyesal"
    ],
    problems: [
      "Kenapa harus tunda? Masalah lo perlu solusi SEKARANG",
      "Setiap detik yang lewat, lo rugi",
      "Tunggu apa lagi? Semuanya udah siap di sini"
    ],
    proofs: [
      "Ribuan orang sudah ambil keputusan ini hari ini",
      "Review mereka membuktikan ini adalah pilihan terbaik",
      "Promo ini gak akan datang lagi, guaranteed"
    ]
  }
};

/* =========================
   PSYCHOLOGICAL ELEMENTS
========================= */

const PSYCHOLOGICAL_ELEMENTS = {
  scarcity: [
    "Stok terbatas, tinggal beberapa unit",
    "Hanya X orang yang bisa akses hari ini",
    "Penawaran eksklusif, tidak untuk semua orang"
  ],
  urgency: [
    "Penawaran berakhir hari ini",
    "Promo spesial, hanya 24 jam lagi",
    "Jangan tunda lagi, stok makin berkurang"
  ],
  social_proof: [
    "Sudah dipercaya 1000+ pengguna",
    "Rating 4.9 dari 5 bintang",
    "Bestseller, paling banyak dibeli"
  ],
  authority: [
    "Direkomendasikan expert di bidang ini",
    "Telah teruji dan tersertifikasi",
    "Dipercaya oleh influencer dan professionals"
  ],
  fomo: [
    "Banyak yang kehabisan kesempatan ini",
    "Jangan menyesal kemudian hari",
    "Ini adalah waktu terbaik untuk action"
  ]
};

/* =========================
   TONE MAPPING
========================= */

const TONE_CONFIG = {
  cheap: {
    range: [0, 50000],
    tone: "casual",
    strategy: "hard_conversion",
    urgency: "high",
    cta: "BUY NOW"
  },
  medium: {
    range: [50000, 250000],
    tone: "semi-formal",
    strategy: "soft_conversion",
    urgency: "medium",
    cta: "COBA SEKARANG"
  },
  premium: {
    range: [250000, Infinity],
    tone: "premium",
    strategy: "authority",
    urgency: "low",
    cta: "KONSULTASI GRATIS"
  }
};

/* =========================
   VISUAL RECOMMENDATION DATABASE
========================= */

const VISUAL_LIBRARY = {
  HOOK: {
    "talent-heavy": {
      low: "Selfie natural, ekspresi terkejut/tertarik",
      high: "Close-up cinematic, dramatic lighting, eye contact direct"
    },
    "product-heavy": {
      low: "Close-up produk sederhana, natural light",
      high: "Macro shot produk dengan dramatic lighting, 4K quality"
    },
    "balanced": {
      low: "Talent holding produk, casual setting",
      high: "Talent + produk dengan smooth transition, cinematic"
    }
  },
  PROBLEM: {
    "talent-heavy": {
      low: "Ekspresi concerned, tangan ke mulut, confused look",
      high: "Dramatic reaction, gesture expressive, emotion clear"
    },
    "product-heavy": {
      low: "Produk dengan 'X' atau tanda negatif, simple overlay",
      high: "Before-state visual, problem shown clearly dengan efek"
    },
    "balanced": {
      low: "Talent showing problem dengan produk lama/alternatif",
      high: "Story visualization of problem, cinematic transition"
    }
  },
  SOLUTION: {
    "talent-heavy": {
      low: "Pegang produk sambil jelasin dengan gesture",
      high: "Reveal produk dengan dramatic effect, excitement expression"
    },
    "product-heavy": {
      low: "Flat lay produk dengan simple text overlay",
      high: "Hero shot 45°, product showcase dengan efek transisi"
    },
    "balanced": {
      low: "Talent presenting produk dengan calm gesture",
      high: "Dynamic transition, talent + produk showcase cinematic"
    }
  },
  PROOF: {
    "talent-heavy": {
      low: "Talent showing hasil/testimonial, thumbs up",
      high: "Testimonial cards, before-after visual, satisfied expression"
    },
    "product-heavy": {
      low: "Rating/review text overlay, number showing",
      high: "Animated rating, user testimonials visual, trust badges"
    },
    "balanced": {
      low: "Talent + review text, simple layout",
      high: "Interactive testimonial, ratings animation, social proof visual"
    }
  },
  CTA: {
    "talent-heavy": {
      low: "Tunjuk link/keranjang sambil ngomong, simple gesture",
      high: "Direct eye contact, strong call-to-action gesture, urgency"
    },
    "product-heavy": {
      low: "Text overlay 'BUY NOW', static button visual",
      high: "Animated CTA button, glowing effect, urgency animation"
    },
    "balanced": {
      low: "Talent pointing + CTA button, medium motion",
      high: "Dynamic CTA, talent + animated button, strong urgency"
    }
  }
};

/* =========================
   VOICE OVER RECOMMENDATIONS
========================= */

const VOICE_OVER_DB = {
  FEAR: {
    tone: "serious, concerned",
    pace: "medium-slow, dramatic pause",
    recommendation: "Use deep tone, emphasize danger, pause for effect"
  },
  STORY: {
    tone: "relatable, conversational",
    pace: "natural, conversational",
    recommendation: "Speak like telling friend, casual tone, genuine emotion"
  },
  LOGIC: {
    tone: "professional, authoritative",
    pace: "clear, deliberate",
    recommendation: "Explain like expert, clear articulation, confident"
  },
  CURIOSITY: {
    tone: "intriguing, engaging",
    pace: "dynamic, building",
    recommendation: "Create suspense, build curiosity, dramatic reveal"
  },
  HARD_SELL: {
    tone: "urgent, compelling",
    pace: "fast, energetic",
    recommendation: "Energetic, direct, create urgency, call-to-action clear"
  }
};

/* =========================
   CTA VARIATIONS
========================= */

const CTA_VARIATIONS = {
  cheap: [
    "Beli sekarang, tinggal hitungan menit",
    "Langsung order sebelum kehabisan stok",
    "Pesan sekarang, bayar nanti juga bisa",
    "Jangan ragu lagi, stock terbatas",
    "Klik beli, gratis ongkir hari ini"
  ],
  medium: [
    "Coba sekarang, garansi uang kembali 30 hari",
    "Cek penawaran eksklusif sekarang juga",
    "Daftar gratis dan dapatkan akses sekarang",
    "Join komunitas kami sekarang",
    "Mulai perjalanan anda hari ini"
  ],
  premium: [
    "Konsultasi gratis dengan expert kami",
    "Booking sesi eksklusif sekarang",
    "Dapatkan akses VIP hari ini",
    "Jadilah bagian dari kelompok eksklusif",
    "Hubungi untuk penawaran spesial"
  ]
};
