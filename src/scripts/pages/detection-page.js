export default class DetectionPage {
  async render() {
    return `
      <section class="detect-container">
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
