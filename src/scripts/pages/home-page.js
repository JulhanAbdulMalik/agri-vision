export default class HomePage {
  async render() {
    return `
<<<<<<< HEAD
      <section class="container">
        <h1>Home Page</h1>
        <img class="logo-home-page" src="images/Logo AgriVision-07.png" alt="">
        
        <img class="logo-home-page" src="images/kegiatan.png" alt="">
=======
      <section class="home-container">
        <div class="card-image">
          <img class="detection-image" src="/images/rice-plant-2.jpg" alt="rice-plant"></img>
        </div>
        <div class="home-desc">
          <div class="header-container">
            <p class="welcome" id="welcome">Welcome to AgriVision</p>
          </div>
          <h1 class="tagline">Aplikasi Cerdas Untuk Petani Modern</h1>
          <p class="description">Deteksi penyakit tanaman dan Tingkatkan pengetahuan pertanian Anda.
          Unggah foto tanaman, dapatkan diagnosis instan, dan pelajari solusi pertanian modern.</p>
          <a href="#about-container" class="discover-link">Discover More</a>
        </div>
      </section>
      <section class="about-container" id="about-container">
        <div class="about-wrapper">
          <div class="about-desc" id="about-desc">
            <h2 class="about-tagline">Kami Percaya, Teknologi Bisa Jadi Sahabat Terbaik Petani dan Pecinta Tanaman</h2>
            <p class="about-text">Kami tidak hanya ingin membantu saat tanamanmu sakit. Kami ingin kamu mengerti tanamanmu — dari akarnya hingga daunnya.</p>
          </div>
          <div class="about-img-wrapper">
            <img src="../../images/farmer.png" class="farmer-img" id="farmer-img" alt="farmer image"></img>
          </div>
        </div>
      </section>
      <section class="our-service" id="our-service">
        <h1 class="our-service-title">Our Service</h1>

        <div class="service-container">
          
          <div class="service-item">
            <div class="image-card">
              <img src="../../images/detection.jpg" class="img-detection">
            </div>
            <div class="featured-card">
              <h3 class="card-title">Deteksi Penyakit Tanaman</h3>
              <p>Unggah foto tanamanmu, sistem kami akan menganalisisnya secara otomatis untuk memberikan diagnosis cepat dan akurat. Dapatkan informasi lengkap mengenai jenis penyakit, gejala, dan solusi penanganannya — semua dalam hitungan detik, langsung dari perangkatmu.</p>
              <a href="#/detection" class="try-now">Coba Sekarang</a>
            </div>
          </div>

          <div class="service-item reverse">
            <div class="featured-card">
              <h3 class="card-title">Edukasi Pertanian</h3>
              <p>Pelajari teknik budidaya berbagai jenis tanaman, strategi pencegahan hama dan penyakit, serta tips pertanian modern yang dapat meningkatkan hasil panen dan menjaga keberlanjutan lingkungan.</p>
              <a href="#/education" class="try-now">Belajar Sekarang</a>
            </div>
            <div class="image-card">
              <img src="../../images/education.png" class="img-detection">
            </div>
          </div>

          <div class="service-item">
            <div class="image-card">
              <img src="../../images/farmers-community.jpg" class="img-detection">
            </div>
            <div class="featured-card">
              <h3 class="card-title">Komunitas Petani</h3>
              <p>Bergabunglah dengan komunitas petani digital yang saling berbagi pengalaman, solusi, dan inspirasi. Di sini, kamu bisa berdiskusi tentang masalah pertanian, bertukar tips budidaya, dan membangun jaringan dengan petani dari berbagai daerah.</p>
              <a href="##" class="try-now" id="trynow-btn-community">Gabung Sekarang</a>
            </div>
          </div>
        </div>
>>>>>>> origin/ui-ux
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
<<<<<<< HEAD
=======
    const buttonCommunity = document.getElementById('trynow-btn-community');
    buttonCommunity.addEventListener('click', (e) => {
      e.preventDefault(); 
      alert("Fitur komunitas akan segera hadir!");
    });
>>>>>>> origin/ui-ux
  }
}
