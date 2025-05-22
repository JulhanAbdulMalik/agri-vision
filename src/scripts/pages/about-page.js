export default class AboutPage {
  async render() {
    return `
      <section class="about-container">
        <div class="section-1">
          <h1>Apa itu AgriVision?</h1>
          <div class="cards">
            <div class="single-card">
              <p>🔍</p>
              <p>Deteksi Penyakit Lewat Foto</p>
            </div>
            <div class="single-card">
              <p>👨‍🎓</p>
              <p>Edukasi Pertanian</p>
            </div>
            <div class="single-card">
              <p>🧑‍🌾</p>
              <p>Komunitas Petani</p>
            </div>
          </div>
        </div>

        <div class="section-2">
          <h1>Mengapa Kami Peduli?</h1>
          <p>Indonesia sedang menghadapi tantangan nyata dalam dunia pertanian. Di balik semangat besar untuk mencapai swasembada pangan, masih banyak petani yang kesulitan mendapatkan informasi akurat, edukasi yang mudah dipahami, serta penanganan cepat terhadap penyakit tanaman. Akibatnya, produktivitas menurun, dan kesejahteraan petani ikut terdampak.</p>
        </div>

        <div class="section-3">
          <h1>Visi Kami</h1>
          <h3>Menjadi mitra digital terpercaya bagi petani Indonesia dalam membangun pertanian yang mandiri, modern, dan berkelanjutan.</h3>
          <h2>Misi Kami</h2>
          <ul>
            <li>Menyediakan akses deteksi penyakit tanaman yang cepat dan akurat</li>
            <li>Mendorong kolaborasi dan pembelajaran antarpetani melalui komunitas</li>
            <li>Menyebarkan edukasi pertanian yang mudah dipahami</li>
          </ul>
        </div>

        <div class="cta">
          <h1>Siap bertani lebih cerdas?</h1>
          <button class="about-cta-btn" id="about-cta-btn">Coba Aplikasinya Sekarang</button>
        </div>
        
      </section>
    `;
  }

  async afterRender() {
    const ctaBtn = document.getElementById('about-cta-btn');
    ctaBtn.addEventListener('click', () => {
      window.location.hash = '#/detection';
    })
  }
}
