# Safrian Arbi Prakoso — Portfolio Website

Website portofolio profesional untuk **Safrian Arbi Prakoso**, Database Management Officer & Data Analytics.

## 📁 Struktur File

```
safrian-portfolio/
├── index.html              ← Halaman utama (HTML struktur)
├── README.md               ← Dokumentasi ini
└── assets/
    ├── css/
    │   └── style.css       ← Semua style & design system
    ├── js/
    │   └── main.js         ← Logika interaktif (animasi, i18n, dark mode)
    └── php/
        └── contact.php     ← Handler form kontak (opsional, butuh server PHP)
```

## 🚀 Cara Deploy

### Opsi 1: Static (tanpa PHP)
Cukup upload `index.html`, `assets/css/`, dan `assets/js/` ke hosting statis (GitHub Pages, Netlify, Vercel, dll).
Form kontak akan tetap berfungsi via redirect WhatsApp langsung.

### Opsi 2: Dengan Server PHP
Upload semua file ke hosting yang mendukung PHP (Niagahoster, cPanel, dll).
Aktifkan baris `mail()` di `contact.php` jika ingin notifikasi email juga.

## ✨ Fitur
- Dark/Light Mode toggle
- Bilingual (ID / EN)
- Animasi partikel canvas
- Typing animation hero
- Scroll spy navigasi
- Glassmorphism card design
- Form kontak → WhatsApp
- Fully responsive (mobile-first)

## 📞 Kontak
- WhatsApp: +62 856-4054-5387
- Email: safrianarbi@gmail.com
