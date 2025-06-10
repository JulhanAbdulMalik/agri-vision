export default class EducationDetailPage {
  constructor() {
    this.caseName = '';
  }

  async render() {
    return `
      <section class="edu-detail-container">
        <div class="back-button-container">
<<<<<<< Updated upstream
          <button id="back-button" class="back-button">← Kembali</button>
=======
          <button id="back-button" class="back-button">←</button>
>>>>>>> Stashed changes
        </div>
        <div id="disease-detail" class="disease-detail">
          <!-- Content will be loaded dynamically -->
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Get case name from URL
    const { id } = await import('../routes/url-parser.js').then(module => module.parseActivePathname());
    this.caseName = id.replace(/-/g, ' ');

    // Load database
    const { database } = await import('../data/course-database.js');
    const disease = database.find(item => 
      item.case.toLowerCase() === this.caseName.toLowerCase()
    );

    if (disease) {
      const detailContainer = document.getElementById('disease-detail');
      detailContainer.innerHTML = this.createDiseaseDetailHTML(disease);
    }

    // Add back button functionality
    document.getElementById('back-button').addEventListener('click', () => {
      window.history.back();
    });
  }

  createDiseaseDetailHTML(disease) {
    return `
      <h1 class="disease-title">${disease.case}</h1>
      <img src="/images/course-images/${disease.case.toLowerCase().replace(/\s+/g, '-')}.jpg" class="disease-image" alt="${disease.case}">
      
      <div class="disease-section">
        <h2>Gejala</h2>
        <p>${disease.gejala}</p>
      </div>
      
      <div class="disease-section">
        <h2>Penyebab</h2>
        <p>${disease.penyebab}</p>
      </div>
      
      <div class="disease-section">
        <h2>Rekomendasi Penanganan</h2>
        <h3>Alami:</h3>
        <p>${disease.rekomendasi.alami}</p>
        <h3>Kimiawi:</h3>
        <p>${disease.rekomendasi.kimiawi}</p>
      </div>
      
      <div class="disease-section">
        <h2>Pencegahan</h2>
        <ul>
          ${disease.pencegahan.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="disease-section">
        <h2>Pelajari Selengkapnya</h2>
        <div class="video-container">${disease.video}</div>
      </div>
    `;
  }
}