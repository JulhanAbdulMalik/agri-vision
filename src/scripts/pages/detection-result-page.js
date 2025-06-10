import { showToast } from '../utils/utils';

export default class DetectionResultPage {
  constructor(plantType) {
    this.plantType = plantType;

    // Data hasil deteksi API
    this.detectionResult = {
      diseaseName: 'Penyakit X',
      confidence: 60,
      description: 'Deskripsi penyakit akan muncul di sini...',
      symptoms: [
        'Bercak daun berwarna coklat',
        'Daun menguning di bagian tepi',
        'Pertumbuhan tanaman terhambat',
      ],
      treatments: [
        'Pemangkasan bagian yang terinfeksi',
        'Penyemprotan fungisida organik',
        'Pengaturan jarak tanam yang lebih baik',
      ],
      prevention: [
        'Rotasi tanaman setiap musim',
        'Pemilihan bibit yang tahan penyakit',
        'Pemikian seterusnya...',
      ],
      similarDiseases: [
        { name: 'Penyakit Y', similarity: 70 },
        { name: 'Penyakit Z', similarity: 30 },
      ],
      timestamp: new Date().toLocaleString(),
    };
  }

  async render() {
    return `
      <section class="detection-result-container">
        <div class="result-header">
          <h1>Hasil Deteksi Penyakit <em>${this.plantType}</em></h1>
          <div class="result-meta">
            <span class="timestamp">${this.detectionResult.timestamp}</span>
            <span class="confidence ${this.getConfidenceClass()}">
              Akurasi: <strong>${this.detectionResult.confidence}%</strong>
            </span>
          </div>
        </div>
        
        <div class="result-summary">
          <div class="result-card disease-card">
            <h2>Penyakit Terdeteksi</h2>
            <h3>${this.detectionResult.diseaseName}</h3>
            <p>${this.detectionResult.description}</p>

            <br>
            <div class="image-placeholder">
              <p>Gambar hasil deteksi</p>
            </div>
          </div>
        </div>
        
        <div class="result-details">
          <div class="detail-card">
            <h3>Gejala</h3>
            <ul class="symptoms-list">
              ${this.detectionResult.symptoms
                .map(
                  (symptom, index) => `
                <li>
                  <span class="step-number">${index + 1}</span>
                  <span class="step-content">${symptom}</span>
                </li>
              `,
                )
                .join('')}
            </ul>
          </div>
          
          <div class="detail-card">
            <h3>Penanganan</h3>
            <ol class="treatment-steps">
              ${this.detectionResult.treatments
                .map(
                  (treatment, index) => `
                <li>
                  <span class="step-number">${index + 1}</span>
                  <span class="step-content">${treatment}</span>
                </li>
              `,
                )
                .join('')}
            </ol>
          </div>
          
          <div class="detail-card">
            <h3>Pencegahan</h3>
            <ol class="prevention-list">
              ${this.detectionResult.prevention
                .map(
                  (prevention, index) => `
                <li>
                  <span class="step-number">${index + 1}</span>
                  <span class="step-content">${prevention}</span>
                </li>
              `,
                )
                .join('')}
            </ol>
          </div>
        </div>
        
        <div class="similar-diseases">
          <h3>Penyakit Serupa</h3>
          <div class="similarity-bars">
            ${this.detectionResult.similarDiseases
              .map(
                (disease) => `
              <div class="similarity-item">
                <span class="disease-name">${disease.name}</span>
                <div class="similarity-bar-container">
                  <div class="similarity-bar" style="width: ${disease.similarity}%"></div>
                  <span class="similarity-value">${disease.similarity}%</span>
                </div>
              </div>
            `,
              )
              .join('')}
          </div>
        </div>
        
        <div class="result-actions">
          <button id="save-report-btn" class="btn-primary">
            Simpan Laporan
          </button>
          <button id="new-detection-btn" class="btn-secondary">
            Deteksi Baru
          </button>
          <button id="expert-help-btn" class="btn-outline">
            Konsultasi Ahli
          </button>
        </div>
        
        <div class="additional-resources">
          <h3>Sumber Daya Tambahan</h3>
          <div class="resources-grid">
            <a href="#" class="resource-card">
              <h4>▶️</h4>
              <span>Video Penanganan</span>
            </a>
            <a href="#" class="resource-card">
              <h4>📄</h4>
              <span>Panduan PDF</span>
            </a>
            <a href="#" class="resource-card">
              <h4>🛒</h4>
              <span>Produk Rekomendasi</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Implementasi logika setelah render
    this.setupEventListeners();

    // T: Ambil data hasil deteksi dari API
    // this.fetchDetectionResult();
  }

  setupEventListeners() {
    document
      .getElementById('new-detection-btn')
      ?.addEventListener('click', () => {
        window.location.hash = `#/detection/${this.plantType.toLowerCase()}`;
      });

    document
      .getElementById('save-report-btn')
      ?.addEventListener('click', this.saveReport.bind(this));
    document
      .getElementById('expert-help-btn')
      ?.addEventListener('click', this.requestExpertHelp.bind(this));
  }

  getConfidenceClass() {
    if (this.detectionResult.confidence > 80) return 'high-confidence';
    if (this.detectionResult.confidence > 50) return 'medium-confidence';
    return 'low-confidence';
  }

  async fetchDetectionResult() {
    // T: Implementasi pengambilan data dari API
    /*
    try {
      const response = await fetch(`/api/detection-result/${this.plantType}`);
      const data = await response.json();
      this.detectionResult = data;
      this.updateUIWithResults();
    } catch (error) {
      console.error('Error fetching detection result:', error);
    }
    */
  }

  updateUIWithResults() {
    // T: Update UI dengan data dari API
    // document.querySelector('.disease-card h3').textContent = this.detectionResult.diseaseName;
    // document.querySelector('.confidence').textContent = `${this.detectionResult.confidence}%`;
  }

  saveReport() {
    // T: Implementasi penyimpanan laporan
    showToast('success', 'Laporan berhasil disimpan!');
  }

  requestExpertHelp() {
    // T: Implementasi permintaan bantuan ahli
    showToast('success', 'Permintaan konsultasi ahli telah dikirim!');
  }
}
