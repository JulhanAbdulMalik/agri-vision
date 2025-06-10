export default class DetectionPage {
  async render() {
    return `
      <section class="detect-container">
<<<<<<< Updated upstream
        <div class="detect-section">
          <h1>Mulai Deteksi Tanamanmu Sekarang!</h1>
          <div class="detect-cards">
            <div class="detect-single-card">
              <p>🌾</p>
              <button class="detection-btn" data-plant="padi">Padi</button>
            </div>
            <div class="detect-single-card">
              <p>🌽</p>
              <button class="detection-btn" data-plant="jagung">Jagung</button>
            </div>
            <div class="detect-single-card">
              <p>🌶️</p>
              <button class="detection-btn" data-plant="cabai">Cabai</button>
            </div>
=======
      
        <div class="detect-content">
          <h1 class="detect-title">Deteksi Penyakit Tanaman</h1>
          <p class="detect-subtitle">Identifikasi penyakit tanaman secara cepat dan akurat. Silahkan pilih jenis tanaman yang ingin kamu deteksi</p>

          <div class="detect-grid">
            <!-- Card Padi -->
            <div class="detect-card">
              <div class="card-icon">🌾</div>
              <h2 class="card-title">Padi</h2>
              <button class="detection-btn" data-plant="padi">Deteksi Sekarang</button>
            </div>

            <!-- Card Jagung -->
            <div class="detect-card">
              <div class="card-icon">🌽</div>
              <h2 class="card-title">Jagung</h2>
              <button class="detection-btn" data-plant="jagung">Deteksi Sekarang</button>
            </div>

            <!-- Card Cabai -->
            <div class="detect-card">
              <div class="card-icon">🌶️</div>
              <h2 class="card-title">Cabai</h2>
              <button class="detection-btn" data-plant="cabai">Deteksi Sekarang</button>
            </div>

            <!-- Card Tomat -->
            <div class="detect-card">
              <div class="card-icon">🍅</div>
              <h2 class="card-title">Tomat</h2>
              <button class="detection-btn" data-plant="tomat">Deteksi Sekarang</button>
            </div>
            
>>>>>>> Stashed changes
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    document.querySelectorAll('.detection-btn').forEach(button => {
      button.addEventListener('click', () => {
        const plantType = button.getAttribute('data-plant');
        window.location.hash = `#/detection/${plantType}`;
      });
    });
  }
}
