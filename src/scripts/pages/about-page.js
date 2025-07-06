export default class AboutPage {
  async render() {
    return `
      <section class="about-container">
        
        <!-- Section 1: Apa itu AgriVision -->
        <section class="section-1">
          <h1>Apa itu <span class="highlight">AgriVision</span>?</h1>
          <div class="cards">
            <div class="single-card" aria-label="Deteksi Penyakit">
              <p class="icon">🔍</p>
              <p>Deteksi Penyakit</p>
            </div>
            <div class="single-card" aria-label="Edukasi Pertanian">
              <p class="icon">👨‍🎓</p>
              <p>Edukasi Pertanian</p>
            </div>
            <div class="single-card" aria-label="Komunitas Petani">
              <p class="icon">🧑‍🌾</p>
              <p>Komunitas Petani</p>
            </div>
            <div class="single-card" aria-label="Download Aplikasi">
              <button id="reload-button" class="button-custom" style="margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 500;">
                Lanjutkan Installasi 🔄️
              </button>

              <button id="install-button" class="button-custom" style="display: none; width: 100%;">
                Install AgriVision 📲
              </button>
            </div>
          </div>
        </section>

        <!-- Section 2: Mengapa Kami Peduli -->
        <section class="section-2">
          <h1>Mengapa Kami Peduli?</h1>
          <p>
            Indonesia sedang menghadapi tantangan nyata dalam dunia pertanian. 
            Di balik semangat besar untuk mencapai swasembada pangan, masih banyak petani yang kesulitan mendapatkan informasi akurat, 
            edukasi yang mudah dipahami, serta penanganan cepat terhadap penyakit tanaman. 
            Akibatnya, produktivitas menurun, dan kesejahteraan petani ikut terdampak.
          </p>
        </section>

        <!-- Section 3: Visi & Misi -->
        <section class="section-3">
          <h2>Visi Kami</h2>
          <p>
            Menjadi mitra digital terpercaya bagi petani Indonesia dalam membangun pertanian yang mandiri, modern, dan berkelanjutan.
          </p>
          <h2>Misi Kami</h2>
          <ul>
            <li>Menyediakan akses deteksi penyakit tanaman yang cepat dan akurat</li>
            <li>Mendorong kolaborasi dan pembelajaran antarpetani melalui komunitas</li>
            <li>Menyebarkan edukasi pertanian yang mudah dipahami</li>
          </ul>
        </section>

        <!-- Section CTA -->
        <section class="cta">
          <h1>Siap bertani lebih cerdas?</h1>
          <button class="about-cta-btn" id="about-cta-btn" aria-label="Coba Deteksinya Sekarang">
            Coba Deteksinya Sekarang
          </button>
        </section>

      </section>
    `;
  }

  async afterRender() {
    const ctaBtn = document.getElementById('about-cta-btn');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        window.location.hash = '#/detection';
      });
    }

    const installButton = document.getElementById('install-button');
    let deferredPrompt;

    // 1. Tangkap event 'beforeinstallprompt'
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();

      deferredPrompt = e;

      installButton.style.display = 'block';
      console.log('Event beforeinstallprompt berhasil ditangkap.');
    });

    // 2. Tambahkan event listener untuk klik pada tombol kustom Anda
    installButton.addEventListener('click', async () => {
      if (deferredPrompt) {
        installButton.style.display = 'none';

        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
          console.log('Pengguna menerima instalasi.');
        } else {
          console.log('Pengguna menolak instalasi.');
        }

        deferredPrompt = null;
      }
    });

    // // (Opsional) Lacak jika aplikasi sudah berhasil diinstal
    // window.addEventListener('appinstalled', () => {
    //   // Sembunyikan tombol instalasi jika masih terlihat
    //   installButton.style.display = 'none';
    //   deferredPrompt = null;
    //   console.log('Aplikasi AgriVision berhasil diinstal!');
    // });

    const reloadButton = document.getElementById('reload-button');
    reloadButton.addEventListener('click', () => {
      location.reload();
    });
  }
}
