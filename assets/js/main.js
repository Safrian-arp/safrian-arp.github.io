/* ==========================================
       1. MULTI-LANGUAGE DICTIONARY (ID/EN)
       ========================================== */
    const translations = {
      id: {
        navAbout: "Tentang", navExp: "Pengalaman", navSkills: "Keahlian", navPortfolio: "Portfolio", navJasa: "Jasa", navContact: "Kontak", navCta: "Hubungi Saya",
        mAbout: "Tentang", mExp: "Pengalaman", mSkills: "Keahlian", mPortfolio: "Portfolio", mJasa: "Jasa", mContact: "Kontak",
        heroEye: "Database · Analytics · Data Entry Specialist · Data Science",
        heroDesc: "Profesional data berpengalaman 7+ tahun dalam pengelolaan database, analisis data, dan pembuatan dashboard bisnis. Spesialis SQL, Power BI, Tableau, dan Python dengan rekam jejak terukur di lingkungan korporasi.",
        heroBtnExp: "Lihat Pengalaman", heroBtnWA: "💬 WhatsApp",
        statExp: "Tahun Pengalaman", statData: "Data / Hari", statCert: "Sertifikasi", statAward: "Penghargaan",
        hcAvail: "Terbuka untuk Peluang Baru",
        
        aLabel: "01 / Tentang Saya",
        aTitle: "Dari Data Mentah Menjadi<br><em>Keputusan Bisnis</em>",
        aP1: "Saya adalah seorang <strong>Database Management Officer</strong> yang berdedikasi dalam mengelola, membersihkan, dan menganalisis data bisnis untuk mendukung pengambilan keputusan strategis. Dengan pengalaman lebih dari <strong>7 tahun</strong> di bidang data, saya telah mengembangkan keahlian mendalam dalam data quality, ETL, dan visualisasi data.",
        aP2: "Lulusan <strong>Teknik Informatika Universitas Dian Nuswantoro</strong>, saya memiliki fondasi teknis yang kuat — mulai dari pemrograman, database, hingga jaringan komputer — yang dipadukan dengan pengalaman nyata di lingkungan korporasi PT. Cakra Radha Mustika (Kalbe Group).",
        aP3: "Saya percaya bahwa <strong>data yang bersih adalah aset terbesar bisnis</strong>. Misi saya: memastikan setiap keputusan didasari oleh insights yang akurat, tervisualisasi dengan jelas, dan dapat ditindaklanjuti secara konkret.",
        hlSpec: "Spesialisasi", hlTools: "Tools Utama", hlDB: "Database", hlLoc: "Lokasi",
        aiAddr: "Alamat", aiPhone: "Telepon", aiEmail: "Email", aiEdu: "Pendidikan", aiStatus: "Status", aiLang: "Bahasa",
        
        awLabel: "04 / Penghargaan",
        awTitle: "Penghargaan &<br><em>Pencapaian</em>",
        aw1Name: "Orang Paling Menginspirasi",
        aw2Name: "Melampaui Target Pencapaian",
        aw3Name: "Entri Data Terbaik",
        
        exLabel: "03 / Pengalaman Kerja",
        exTitle: "Rekam Jejak<br><em>Profesional</em>",
        exNow: "Sekarang", exCurrent: "Posisi Saat Ini",
        ex1Role: "Database Management Officer",
        ex1l1: "Melakukan data sorting, cleansing, serta memproses <strong>&gt;1.500 data customer</strong> per hari, termasuk input dan pembaruan ke database perusahaan.",
        ex1l2: "Mengidentifikasi dan memperbaiki kesalahan atau ketidaksesuaian data secara sistematis.",
        ex1l3: "Melakukan pengecekan kualitas data untuk memastikan data seragam, akurat, dan valid sesuai standar perusahaan.",
        ex1l4: "Melakukan <strong>data merging</strong> untuk menghilangkan duplikasi data pada sistem database perusahaan.",
        ex2Role: "Administrasi Kepegawaian",
        ex2l1: "Mengelola data dan administrasi kepegawaian serta memastikan informasi ASN selalu diperbarui.",
        ex2l2: "Menyediakan data dan sistem informasi kepegawaian untuk kebutuhan internal instansi.",
        ex2l3: "Mengelola arsip kepegawaian dan memproses dokumen seperti Kartu Pegawai, Karis/Karsu, dan KPE.",
        ex3Role: "Junior Programmer",
        ex3l1: "Menyelesaikan proyek pemrograman desktop sebagai hasil dari pelatihan intensif.",
        ex3l2: "Mengembangkan aplikasi sederhana seperti aplikasi penjualan, transaksi harian, dan pencatatan akademik.",
        ex3l3: "Mengelola database lokal aplikasi dan merancang tampilan antarmuka aplikasi yang user-friendly.",

        skLabel: "02 / Keahlian Teknis",
        skTitle: "Stack Keahlian<br><em>Profesional</em>",
        skCat1: "Data & Analytics", skCat1Desc: "Dashboard KPI untuk HR dan e-commerce",
        skCat2: "Pemrograman & Otomatisasi", skCat2Desc: "Workflow otomatis & solusi analisis data",
        skCat3: "AI & Teknologi Baru", skCat3Desc: "Eksplorasi AI untuk analitik & otomasi bisnis",
        skCat4: "Infrastruktur IT", skCat4Desc: "Fondasi jaringan & sistem dari latar belakang TI",
        skCat5: "Desain & Kreatif", skCat5Desc: "Visual reporting & konten presentasi profesional",
        skCat6: "Soft Skills", skCat6Desc: "Kolaborasi tim & komunikasi stakeholder",

        edLabel: "08 / Pendidikan",
        edTitle: "Fondasi<br><em>Akademis</em>",
        edDegree: "S1 Teknik Informatika",
        edIPK: "IPK", edProg: "Program",
        edNote: "Aktif dalam pengembangan diri melalui berbagai bootcamp dan program sertifikasi selama masa studi. Memiliki pengalaman magang di instansi pemerintah dan pelatihan pemrograman desktop intensif.",

        ctLabel: "05 / Sertifikasi",
        ctTitle: "Kompetensi<br><em>Terverifikasi</em>",

        pfLabel: "06 / Portfolio",
        pfTitle: "Proyek &<br><em>Karya Nyata</em>",
        pf1Title: "Dashboard KPI HR & Sales", pf1Desc: "Dashboard interaktif untuk monitoring KPI departemen HR dan Sales secara real-time dengan drill-down capability.",
        pf2Title: "Sistem Pembersihan Data Otomatis", pf2Desc: "Skrip python modular untuk otomatisasi pipeline sorting, cleansing, dan data merging berkecepatan tinggi.",
        pf3Title: "Analisis Pasar & Laporan Penjualan", pf3Desc: "Visualisasi Tableau canggih yang menganalisis tren performa produk dan melacak performa regional.",

        jsLabel: "07 / Layanan Profesional",
        jsTitle: "Jasa &<br><em>Solusi Data</em>",
        js1Name: "Visualisasi & Laporan Bisnis", js1Desc: "Desain dasbor interaktif menggunakan Power BI atau Tableau untuk visualisasi KPI bisnis penting secara instan.",
        js1f1: "Desain dashboard kustom", js1f2: "DAX & Data Modeling", js1f3: "Filter interaktif lengkap",
        js2Name: "Optimasi & Skema Database", js2Desc: "Perancangan arsitektur database relasional, optimasi kueri (SQL tuning), pembersihan, dan migrasi data aman.",
        js2f1: "Tuning kueri SQL lambat", js2f2: "Pembersihan data berkala", js2f3: "Desain Skema Database",
        js3Name: "Otomatisasi Workflow Data", js3Desc: "Otomatisasi entri data berulang, proses ETL, dan manipulasi data harian menggunakan skrip Python/VBA.",
        js3f1: "Skrip Python / Macros VBA", js3f2: "Otomatisasi ETL Data", js3f3: "Dokumentasi penyerahan lengkap",
        jsPriceLabel: "Mulai Dari", jsPriceLabel2: "Mulai Dari", jsPriceLabel3: "Mulai Dari",
        jsBtn1: "Pesan", jsBtn2: "Pesan", jsBtn3: "Pesan",
        jsBadgeFeat: "Populer",
        jsNoteTitle: "Kebutuhan Data Kustom?", jsNoteDesc: "Saya selalu terbuka untuk mendiskusikan integrasi data skala besar atau solusi analitik data harian yang disesuaikan secara khusus.",
        jsNoteBtn: "💬 Diskusikan Kebutuhan",

        tsLabel: "09 / Testimoni",
        tsTitle: "Pendapat Mereka Tentang<br><em>Kerja Saya</em>",
        ts1Text: "\"Safrian sangat teliti dalam mengolah data pelanggan kami. Duplikasi data berkurang drastis dan integritas laporan meningkat!\"",
        ts1Role: "Product Manager — PT. CRM",
        ts2Text: "\"Sistem pelacakan administrasi kepegawaian yang dirancang Safrian sangat membantu efisiensi HRD kami. Rekomendasi luar biasa!\"",
        ts2Role: "HR Manager — PT. CRM",
        ts3Text: "\"Dasbor Power BI buatan Safrian mempermudah tim kami dalam melihat tren penjualan harian secara instan dan menentukan strategi.\"",
        ts3Role: "Owner E-commerce — Yogyakarta",

        cLabel: "10 / Kontak Saya",
        cTitle: "Mari Berkolaborasi &<br><em>Tingkatkan Bisnis Anda</em>",
        cIntro: "Tertarik untuk mengintegrasikan database Anda, merancang dasbor analitik bisnis yang interaktif, atau ingin melakukan diskusi analitik? Hubungi saya hari ini dan mari kita temukan wawasan terdalam dari aset data Anda!",
        cMethodPhone: "Telepon / WA", cMethodEmail: "Surel / Email", cMethodLoc: "Lokasi",
        cFormTitle: "Kirim Pesan Langsung",
        lblFormName: "Nama Lengkap", lblFormSub: "Subjek / Perusahaan", lblFormMsg: "Pesan",
        btnFormSend: "Kirim Pesan ke WhatsApp",
        ftRight: "Didesain & Dikembangkan dengan Presisi Data"
      },
      en: {
        navAbout: "About", navExp: "Experience", navSkills: "Skills", navPortfolio: "Portfolio", navJasa: "Services", navContact: "Contact", navCta: "Contact Me",
        mAbout: "About", mExp: "Experience", mSkills: "Skills", mPortfolio: "Portfolio", mJasa: "Services", mContact: "Contact",
        heroEye: "Database · Analytics · Data Entry Specialist · Data Science",
        heroDesc: "Data professional with 7+ years of experience in database management, data analysis, and building business dashboards. Specialized in SQL, Power BI, Tableau, and Python with a proven track record in Kalbe Group.",
        heroBtnExp: "View Experience", heroBtnWA: "💬 WhatsApp",
        statExp: "Years Experience", statData: "Data / Day", statCert: "Certifications", statAward: "Awards",
        hcAvail: "Open to New Opportunities",
        
        aLabel: "01 / About Me",
        aTitle: "From Raw Data Into<br><em>Strategic Insights</em>",
        aP1: "I am a dedicated <strong>Database Management Officer</strong> who is passionate about managing, cleaning, and analyzing business data to support strategic decision making. With over <strong>7 years</strong> in the data industry, I have developed deep expertise in data quality, ETL pipelines, and business intelligence reporting.",
        aP2: "As a graduate of <strong>Informatics Engineering from Dian Nuswantoro University</strong>, I have a robust technical foundation — spanning programming, databases, and networking — combined with corporate experience at PT. Cakra Radha Mustika (Kalbe Group).",
        aP3: "I firmly believe that <strong>clean data is a business's greatest asset</strong>. My mission is to ensure every key business decision is backed by accurate, clearly visualized, and actionable insights.",
        hlSpec: "Specialization", hlTools: "Core Tools", hlDB: "Database", hlLoc: "Location",
        aiAddr: "Address", aiPhone: "Phone", aiEmail: "Email", aiEdu: "Education", aiStatus: "Status", aiLang: "Languages",
        
        awLabel: "04 / Awards",
        awTitle: "Awards &<br><em>Achievements</em>",
        aw1Name: "Most Inspiring People",
        aw2Name: "Exceed Achievement Target",
        aw3Name: "Best Data Entry",
        
        exLabel: "03 / Work Experience",
        exTitle: "Professional<br><em>Track Record</em>",
        exNow: "Present", exCurrent: "Current Role",
        ex1Role: "Database Management Officer",
        ex1l1: "Sorting, cleansing, and processing over <strong>1,500 customer records</strong> daily, maintaining and updating the corporate centralized database.",
        ex1l2: "Systematically identifying and rectifying data inconsistencies or anomalies.",
        ex1l3: "Enforcing strict data quality checks to ensure all entries are uniform, accurate, structured, and valid.",
        ex1l4: "Designing and performing regular <strong>data merging</strong> protocols to remove duplicate customer records.",
        ex2Role: "Personnel Administration",
        ex2l1: "Managed personnel records and employee administration database, ensuring staff information was consistently updated.",
        ex2l2: "Prepared personnel datasets and reports for internal administration audits.",
        ex2l3: "Maintained employment records, physical archives, and processed digital work documentation.",
        ex3Role: "Junior Programmer",
        ex3l1: "Developed desktop application projects as part of an intensive programming bootcamp.",
        ex3l2: "Built simple software solutions: point-of-sale applications, transaction trackers, and academic logs.",
        ex3l3: "Designed user-friendly desktop user interfaces and managed local database systems.",

        skLabel: "02 / Technical Skills",
        skTitle: "Professional<br><em>Skill Stack</em>",
        skCat1: "Data & Analytics", skCat1Desc: "KPI Dashboards for HR and e-commerce",
        skCat2: "Programming & Automation", skCat2Desc: "Automated workflows & analysis solutions",
        skCat3: "AI & Emerging Tech", skCat3Desc: "AI exploration for analytics & business automation",
        skCat4: "IT Infrastructure", skCat4Desc: "Networking & system foundation from CS degree",
        skCat5: "Design & Creative", skCat5Desc: "Visual reporting & professional slide deck contents",
        skCat6: "Soft Skills", skCat6Desc: "Team collaboration & stakeholder communication",

        edLabel: "08 / Education",
        edTitle: "Academic<br><em>Foundation</em>",
        edDegree: "Bachelor of Computer Science",
        edIPK: "GPA", edProg: "Major",
        edNote: "Actively pursued self-improvement through bootcamp and training certifications during college. Gained internship experience at government agencies and intensive programming academies.",

        ctLabel: "05 / Certifications",
        ctTitle: "Verified<br><em>Competence</em>",

        pfLabel: "07 / Portfolio",
        pfTitle: "Projects &<br><em>Real Work</em>",
        pf1Title: "HR & Sales KPI Dashboard", pf1Desc: "Interactive business intelligence dashboard for monitoring HR and Sales KPIs with deep drill-down features.",
        pf2Title: "Automated Data Cleansing System", pf2Desc: "Modular Python script built for high-speed ETL sorting, cleansing, and merging pipelines.",
        pf3Title: "Market Analysis & Performance", pf3Desc: "Advanced Tableau visualizations tracking product trends and parsing regional sales performances.",

        jsLabel: "07 / Professional Services",
        jsTitle: "Services &<br><em>Data Solutions</em>",
        js1Name: "Visualization & Reporting", js1Desc: "Interactive Power BI or Tableau dashboard designs for instant business KPI visualization.",
        js1f1: "Custom dashboard design", js1f2: "DAX & Data Modeling", js1f3: "Fully interactive filters",
        js2Name: "Database Schema & Optimization", js2Desc: "Relational database schema designs, custom SQL query tuning, data cleansing, and migrations.",
        js2f1: "Slow SQL query tuning", js2f2: "Scheduled data cleansing", js2f3: "Database Schema Design",
        js3Name: "Data Workflow Automation", js3Desc: "Automation of redundant data entries, ETL pipelines, and daily calculations using Python/VBA.",
        js3f1: "Python Scripts / VBA Macros", js3f2: "ETL Process Automation", js3f3: "Comprehensive handover docs",
        jsPriceLabel: "Starting From", jsPriceLabel2: "Starting From", jsPriceLabel3: "Starting From",
        jsBtn1: "Order", jsBtn2: "Order", jsBtn3: "Order",
        jsBadgeFeat: "Popular",
        jsNoteTitle: "Custom Data Requirements?", jsNoteDesc: "I am always open to discussing customized workflow automation or high-scale database migrations specifically for your needs.",
        jsNoteBtn: "💬 Discuss Requirements",

        tsLabel: "09 / Testimonials",
        tsTitle: "What They Say<br><em>About Me</em>",
        ts1Text: "\"Safrian was highly meticulous in handling our customer database. Duplicate records dropped dramatically, raising reporting validity!\"",
        ts1Role: "Product Manager — PT. CRM",
        ts2Text: "\"The personnel administration tracking tools Safrian designed vastly boosted our HR efficiency. Highly recommended!\"",
        ts2Role: "HR Manager — PT. CRM",
        ts3Text: "\"Safrian's Power BI dashboard made it extremely easy for us to view daily ecommerce sales trends instantly and execute choices.\"",
        ts3Role: "Owner E-commerce — Yogyakarta",

        cLabel: "10 / Contact Me",
        cTitle: "Let's Collaborate &<br><em>Grow Your Business</em>",
        cIntro: "Interested in automating your database pipelines, designing interactive business analytics dashboards, or having a detailed data discussion? Let's connect today!",
        cMethodPhone: "Phone / WA", cMethodEmail: "Email", cMethodLoc: "Location",
        cFormTitle: "Send a Message",
        lblFormName: "Full Name", lblFormSub: "Subject / Company", lblFormMsg: "Message",
        btnFormSend: "Send Message to WhatsApp",
        ftRight: "Designed & Developed with Data Precision"
      }
    };

    let currentLang = localStorage.getItem('safrian_lang') || 'id';

    function setLang(lang) {
      currentLang = lang;
      localStorage.setItem('safrian_lang', lang);
      
      // Update Buttons Active Status
      document.getElementById('lang-id').classList.toggle('active', lang === 'id');
      document.getElementById('lang-en').classList.toggle('active', lang === 'en');
      
      // Translate elements with corresponding translations
      const dict = translations[lang];
      for (const key in dict) {
        const el = document.getElementById(key);
        if (el) {
          el.innerHTML = dict[key];
        }
      }
      
      // Re-initialize typing animation to adjust language
      resetTypingAnimation();
    }


    /* ==========================================
       2. LIGHT/DARK THEME TOGGLE
       ========================================== */
    function toggleDark() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('safrian_theme', newTheme);
      
      const btn = document.getElementById('theme-btn');
      btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      
      // Update particle canvas colors dynamically
      if (typeof initParticles === 'function') {
        initParticles();
      }
    }

    // Set saved theme on load
    const savedTheme = localStorage.getItem('safrian_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-btn').textContent = savedTheme === 'dark' ? '☀️' : '🌙';


    /* ==========================================
       3. CANVAS DATA PARTICLE BACKGROUND
       ========================================== */
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    let mouse = { x: null, y: null, radius: 130 };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 25) + 12;
        this.updateColor();
      }

      updateColor() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
          this.color = Math.random() > 0.5 ? 'rgba(0, 194, 255, 0.45)' : 'rgba(99, 102, 241, 0.45)';
        } else {
          this.color = Math.random() > 0.5 ? 'rgba(43, 91, 173, 0.25)' : 'rgba(74, 124, 199, 0.25)';
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      const numberOfParticles = Math.min((canvas.width * canvas.height) / 13000, 90);
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const maxConnectDistance = 140;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxConnectDistance) {
            let alpha = (1 - (distance / maxConnectDistance)) * (isDark ? 0.12 : 0.08);
            ctx.strokeStyle = isDark ? `rgba(0, 194, 255, ${alpha})` : `rgba(43, 91, 173, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    resizeCanvas();
    animateParticles();


    /* ==========================================
       4. DYNAMIC TYPING ANIMATION (I18N COMPATIBLE)
       ========================================== */
    const typingList = {
      id: [
        "Database Management Officer",
        "Data Analyst",
        "Data Scientist"
      ],
      en: [
        "Database Management Officer",
        "Data Analyst",
        "Data Scientist"
      ]
    };

    let typingTimer = null;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function resetTypingAnimation() {
      if (typingTimer) {
        clearTimeout(typingTimer);
      }
      charIndex = 0;
      wordIndex = 0;
      isDeleting = false;
      document.getElementById('heroTitleTyping').textContent = '';
      typeTitle();
    }

    function typeTitle() {
      const list = typingList[currentLang] || typingList['id'];
      const currentWord = list[wordIndex];
      const el = document.getElementById('heroTitleTyping');
      
      if (!el) return;

      if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentWord.length) {
        speed = 2200; // Delay when word is typed out fully
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % list.length;
        speed = 400; // Small delay before typing next word
      }

      typingTimer = setTimeout(typeTitle, speed);
    }


    /* ==========================================
       5. MOBILE BURGER DRAWER MENU
       ========================================== */
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('open');
    }


    /* ==========================================
       6. ACTIVE NAV LINK & NAVBAR EFFECT ON SCROLL
       ========================================== */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      // Background toggle on scroll
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Scroll Spy for links
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });


    /* ==========================================
       7. FADE-IN ON SCROLL ANIMATION
       ========================================== */
    const fadeElements = document.querySelectorAll('.fade-up');
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(el => fadeObserver.observe(el));


    /* ==========================================
       8. GLASS CARD SPARKLE / MOUSE MOVE GLOW EFFECT
       ========================================== */
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    });


    /* ==========================================
       9. FORM SUBMISSION -> WHATSAPP
       ========================================== */
    function sendWhatsApp(event) {
      event.preventDefault();
      
      const name = document.getElementById('formName').value;
      const subject = document.getElementById('formSubject').value;
      const msg = document.getElementById('formMsg').value;
      const statusEl = document.getElementById('contactStatus');

      // Pre-formatted Whatsapp text
      const formatText = `Halo Safrian,\n\nPerkenalkan saya *${name}* dari *${subject}*.\n\n${msg}`;
      const encodedText = encodeURIComponent(formatText);
      const waURL = `https://wa.me/6285640545387?text=${encodedText}`;

      statusEl.style.display = 'block';
      statusEl.style.color = '#22C55E';
      statusEl.textContent = currentLang === 'id' 
        ? '✓ Pesan siap! Membuka WhatsApp Anda...' 
        : '✓ Message prepared! Launching your WhatsApp...';

      setTimeout(() => {
        window.open(waURL, '_blank');
        statusEl.style.display = 'none';
        document.getElementById('contactForm').reset();
      }, 1200);
    }

    // Set Saved Language & Initiate Animations
    window.addEventListener('DOMContentLoaded', () => {
      setLang(currentLang);
    });